import { date } from '../../_extended_generic'

export declare type ObservationPeriod = {
    observation_period_id: number
    person_id: number
    observation_period_start_date: date
    observation_period_end_date: date
    period_type_concept_id: number
}
