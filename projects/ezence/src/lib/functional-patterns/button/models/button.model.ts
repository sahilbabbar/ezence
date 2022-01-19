type EzButtonType = 'default' | 'filled' | 'outline' | 'bare';

export interface EzButton {
    label: string;
    type?: EzButtonType;
}
