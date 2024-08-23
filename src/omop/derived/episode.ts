import { date, datetime } from '../../_extended_generic'

export declare type Episode = {
    episode_id: number
    person_id: number
    episode_concept_id: number
    episode_start_date: date
    episode_start_datetime: datetime
    episode_end_date: date
    episode_end_datetime: datetime
    episode_parent_id: number
    episode_number: number
    episode_object_concept_id: number
    episode_source_value: string
    episode_source_concept_id: number
}
