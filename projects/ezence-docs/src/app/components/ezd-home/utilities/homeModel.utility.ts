export class EzdHomeModel {
    app!: App;
    pages!: Page[];
    social: any;
}

export class App {
    name!: string;
    version!: number;
    license!: string;
}

export class Page {
    label!: string;
    href!: string;
}
