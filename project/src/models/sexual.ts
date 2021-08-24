export default class Section {
    id: Number = -1
    name: String = ""
    papa: Number | null = null
    son:Section[] = []
}