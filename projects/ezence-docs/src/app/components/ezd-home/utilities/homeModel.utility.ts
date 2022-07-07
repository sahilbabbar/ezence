export class EzdHomeModel {
    app!: App;
    pages!: Page[];
    content: any;
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

export class Social {}
