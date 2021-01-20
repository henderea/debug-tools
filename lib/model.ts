// @ts-ignore
import { ko, obs, obsArr, comp } from 'lib/knockout-util.ts';

const deploymentId = process.env.VERCEL_URL ? process.env.VERCEL_URL.replace(/^.*?-([a-zA-Z0-9]+)(-[^-]+)?\.vercel\.app.*$/, '$1') : 'N/A';

class Model {
  private readonly _windowWidth: ko.Observable<number> = obs(-1);
  private readonly _windowHeight: ko.Observable<number> = obs(-1);
  private readonly _extraInfo: ko.PureComputed<string>;
  constructor() {
    this._extraInfo = comp(this, (self: Model) => {
      // @ts-ignore
      const standalone: Optional<boolean> = window.navigator.standalone;
      const standaloneDisplay: string = standalone === true ? 'true' : standalone === false ? 'false' : standalone === undefined ? 'undefined' : `'${standalone}' (${typeof standalone})`;
      let windowWidth: number = self.windowWidth;
      let windowHeight: number = self.windowHeight;
      return `<b>Standalone:</b> ${standaloneDisplay}<br><b>Deployment ID:</b> ${deploymentId} ('${process.env.VERCEL_URL}')<br><b>Window:</b> ${windowWidth < 0 ? '?' : windowWidth}x${windowHeight < 0 ? '?' : windowHeight}px`;
    });
  }

  get windowWidth(): number { return this._windowWidth(); }
  set windowWidth(value: number) { this._windowWidth(value); }
  get windowHeight(): number { return this._windowHeight(); }
  set windowHeight(value: number) { this._windowHeight(value); }
  get extraInfo(): string { return this._extraInfo(); }

  refreshPage() {
    window.location.reload();
  }
}

export {
  Model,
  ko
};