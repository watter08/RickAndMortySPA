export type Result<T> = {
    Failed: Boolean;
    Message:String;
    Succeeded:Boolean;
    Data:T;
}