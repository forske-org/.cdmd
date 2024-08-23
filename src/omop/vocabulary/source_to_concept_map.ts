import { Core } from '../_meta'

export declare type SourceToConceptMap = Core & {
    source_code: string
    source_concept_id: number
    source_vocabulary_id: string
    source_code_description: string
    target_concept_id: number
    target_vocabulary_id: string
}
