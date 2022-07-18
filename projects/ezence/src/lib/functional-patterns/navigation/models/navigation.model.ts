export class EzNavigation {
    brand!: {
        label: string;
        href?: string;
        image?: string;
    };
    links?: {
        label: string;
        href?: string;
        icon?: string; // TODO: Make & use Icon type
    }[];
}
