export interface Departament {
    content: DepartamentContent[];
}

export interface DepartamentContent {
    id: number;
    created_at: any;
    name: string;
    description: string;
}
