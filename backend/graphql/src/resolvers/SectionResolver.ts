import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Section, SectionInput, NewSection } from "../models/Section";
import axios from 'axios'
import PORT from "../../PORT";

@Resolver()
export default class {
    private sectionList: Section[] = []

    @Query(() => [Section])
    async sections() {
        const { data } = await axios.get(`${PORT}/sections`);
        this.sectionList = data

        return this.sectionList
    }

    @Mutation(() => NewSection)
    async createSection(@Arg('newSection') newSection: SectionInput) {
        const { data } = await axios.post(`${PORT}/section`, newSection)
        this.sectionList.push(data)

        return data
    }
    @Mutation(() => NewSection)
    async updateSection(@Arg('id') id: string, @Arg('updatedSection') updatedSection: SectionInput) {
        const { data } = await axios.put(`${PORT}/section/${id}`, updatedSection)
        this.sectionList = this.sectionList.filter(section => section._id !== id)
        this.sectionList.push(data)

        return data
    }

    @Mutation(() => Section)
    async deleteSection(@Arg('id') id: string) {
        const { data } = await axios.delete(`${PORT}/section/${id}`)
        this.sectionList = this.sectionList.filter(section => section._id !== data._id)

        return data
    }

}