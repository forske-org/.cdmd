import { Core } from '../_meta'

export declare type Concept = Core & {
    concept_id: number
    concept_name: string
    domain_id: string
    vocabulary_id: string
    concept_class_id: string
    standard_concept: string
    concept_code: string
}
