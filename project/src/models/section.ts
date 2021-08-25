export default class Section {
    id: number = -1
    name: string = ""
    parentId: number | null = null
    sections: Section[] = []
}