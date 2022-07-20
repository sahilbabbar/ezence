type EzFooterItemPosition = 'left' | 'center' | 'right';

export interface EzFooterItem {
    css?: any;
    icon?: string;
    label?: string; // TODO: no property is mandatory for footer item?
    template?: any;
    position?: EzFooterItemPosition;
    url?: string;
}
