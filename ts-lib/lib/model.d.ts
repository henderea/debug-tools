import { ko } from 'lib/knockout-util.ts';
declare class Model {
    private readonly _windowWidth;
    private readonly _windowHeight;
    private readonly _extraInfo;
    constructor();
    get windowWidth(): number;
    set windowWidth(value: number);
    get windowHeight(): number;
    set windowHeight(value: number);
    get extraInfo(): string;
    refreshPage(): void;
}
export { Model, ko };
