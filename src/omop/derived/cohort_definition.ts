import { date } from '../../_extended_generic'

export declare type CohortDefinition = {
    cohort_definition_id: number
    cohort_definition_name: string
    cohort_definition_description: string
    definition_type_concept_id: number
    cohort_definition_syntax: string
    subject_concept_id: number
    cohort_initiation_date: date
}
