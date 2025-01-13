export interface ExercisePath {
  Path: number
  CalfTestFail: boolean
  WorkoutPerWeekNumber: number
  Workout1: string
  Workout2?: string
  Workout3?: string
}

export const exercisePaths: ExercisePath[] = [
  {
    Path: 1,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 2,
    Workout1: "Knee Strength, Gluteus Medius Strength, Ankle Mobility, Balance, Calf Strength, Hamstring Strength",
    Workout2: "Knee Strength, Gluteus Maximus Strength, Ankle Mobility, Balance, Calf Strength, Hamstring Strength"
  },
  {
    Path: 2,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 2,
    Workout1:
      "Knee Strength, Gluteus Medius Strength, Gluteus Maximus Strength, Ankle Mobility, Balance, Hamstring Strength",
    Workout2: "Knee Strength, Gluteus Medius Strength, Gluteus Maximus Strength, Ankle Mobility, Balance, Front Planks"
  },
  {
    Path: 3,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 2,
    Workout1: "Knee Strength, Gluteus Medius Strength, Gluteus Maximus Strength, Balance, Hamstring, Calf Strength",
    Workout2: "Knee Strength, Gluteus Medius Strength, Gluteus Maximus Strength, Balance, Calf Strength, Front Planks"
  },
  {
    Path: 4,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 2,
    Workout1: "Knee Strength, Gluteus Medius Strength, Gluteus Maximus Strength, Balance, Hamstring Strength",
    Workout2: "Knee Strength, Gluteus Medius Strength, Gluteus Maximus Strength, Balance, Front Planks"
  },
  {
    Path: 5,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 3,
    Workout1: "Calf Strength, Front Planks, Balance, Knee Strength, Gluteus Medius Strength",
    Workout2: "Calf Strength, Ankle Mobility, Gluteus Medius Strength, Gluteus Maximus Strength",
    Workout3: "Ankle Mobility, Hamstring Strength, Balance, Knee Strength, Gluteus Maximus Strength"
  },
  {
    Path: 6,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 3,
    Workout1: "Front Planks, Balance, Knee Strength, Gluteus Medius Strength",
    Workout2: "Ankle Mobility, Gluteus Medius Strength, Gluteus Maximus Strength, Hamstring Strength",
    Workout3: "Ankle Mobility, Balance, Knee Strength, Gluteus Maximus Strength"
  },
  {
    Path: 7,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 3,
    Workout1: "Calf Strength, Front Planks, Balance, Knee Strength, Gluteus Medius Strength",
    Workout2: "Calf Strength, Balance, Gluteus Medius Strength, Gluteus Maximus Strength",
    Workout3: "Ankle Mobility, Hamstring Strength, Knee Strength, Gluteus Maximus Strength"
  },
  {
    Path: 8,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 3,
    Workout1: "Front Planks, Balance, Knee Strength, Gluteus Medius Strength",
    Workout2: "Balance, Gluteus Medius Strength, Gluteus Maximus Strength, Knee Strength",
    Workout3: "Hamstring Strength, Knee Strength, Gluteus Maximus Strength, Balance"
  }
]

export default exercisePaths
