export interface ExercisePath {
  Path: number
  AnkleTestFail: boolean
  CalfTestFail: boolean
  WorkoutPerWeekNumber: number
  Workout1: string
  Workout2?: string
  Workout3?: string
}

export const exercisePaths: ExercisePath[] = [
  {
    Path: 1,
    AnkleTestFail: true,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 2,
    Workout1: "Calf Strength, Knee Strength, Gluteus Medius Strength, Foot Strength",
    Workout2: "Ankle Mobility, Hamstring Strength, Gluteus Maximus Strength, Balance"
  },
  {
    Path: 2,
    AnkleTestFail: true,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 2,
    Workout1: "Knee Strength, Gluteus Medius Strength, Hamstring Strength, Foot Strength",
    Workout2: "Gluteus Maximus Strength, Balance, Ankle Mobility, Foot Strength"
  },
  {
    Path: 3,
    AnkleTestFail: false,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 2,
    Workout1: "Calf Strength, Knee Strength, Gluteus Medius Strength, Hamstring Strength",
    Workout2: "Gluteus Maximus Strength, Balance, Knee Strength Isometrics, Foot Strength"
  },
  {
    Path: 4,
    AnkleTestFail: false,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 2,
    Workout1: "Knee Strength, Gluteus Medius Strength, Hamstring Strength, Foot Strength",
    Workout2: "Gluteus Maximus Strength, Balance, Knee Strength Isometrics, Foot Strength"
  },
  {
    Path: 5,
    AnkleTestFail: true,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 3,
    Workout1: "Calf Strength, Knee Strength, Foot Strength",
    Workout2: "Hamstring Strength, Gluteus Maximus Strength, Ankle Mobility",
    Workout3: "Front Planks, Balance, Gluteus Medius Strength"
  },
  {
    Path: 6,
    AnkleTestFail: true,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 3,
    Workout1: "Knee Strength, Hamstring Strength, Foot Strength",
    Workout2: "Hamstring Strength, Gluteus Maximus Strength, Ankle Mobility",
    Workout3: "Front Planks, Balance, Gluteus Medius Strength"
  },
  {
    Path: 7,
    AnkleTestFail: false,
    CalfTestFail: true,
    WorkoutPerWeekNumber: 3,
    Workout1: "Calf Strength, Knee Strength, Hamstring Strength",
    Workout2: "Gluteus Maximus Strength, Knee Strength Isometrics, Foot Strength",
    Workout3: "Front Planks, Balance, Gluteus Medius Strength"
  },
  {
    Path: 8,
    AnkleTestFail: false,
    CalfTestFail: false,
    WorkoutPerWeekNumber: 3,
    Workout1: "Knee Strength, Hamstring Strength, Foot Strength",
    Workout2: "Gluteus Maximus Strength, Knee Strength Isometrics, Foot Strength",
    Workout3: "Front Planks, Balance, Gluteus Medius Strength"
  }
]

export default exercisePaths
