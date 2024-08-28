import { date, datetime } from '../../_extended_generic'

export declare type ProcedureOccurrence = {
    procedure_occurrence_id: number
    person_id: number
    procedure_concept_id: number
    procedure_date: date
    procedure_datetime: datetime
    procedure_end_date: date
    procedure_end_datetime: datetime
    procedure_type_concept_id: number
    modifier_concept_id: number
    quantity: number
    provider_id: number
    visit_occurrence_id: number
    visit_detail_id: number
    procedure_source_value: string
    procedure_source_concept_id: number
    modifier_source_value: string
}
