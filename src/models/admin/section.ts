import Record from "../record"

export default class Section {
    id: number = -1
    sectionId: number|null = null
    name: string = ''
    createdAt: number = 0
    updatedAt: number = 0
    record: Record|null = null
    sections: Section[] = []
}