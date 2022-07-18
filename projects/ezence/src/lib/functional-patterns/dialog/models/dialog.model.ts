export interface EzDialog {
    heading: string;
    content: string;
    actions?: EzDialogAction[];
}

export interface EzDialogAction {
    label: string;
    callback: any;
}
