type EzFooterItemPosition = 'left' | 'center' | 'right';

export interface EzFooterItem {
    css?: any;
    icon?: string;
    label: string;
    template?: any;
    position?: EzFooterItemPosition;
    url?: string;
}
