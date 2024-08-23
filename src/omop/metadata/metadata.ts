import { date, datetime } from '../../_extended_generic'

export declare type Metadata = {
    metadata_id: number
    metadata_concept_id: number
    metadata_type_concept_id: number
    name: string
    value_as_string: string
    value_as_concept_id: number
    value_as_number: number // Float
    metadata_date: date
    metadata_datetime: datetime
}
