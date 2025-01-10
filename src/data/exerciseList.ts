type Exercise = {
  Month: number
  ExerciseNo: number
  Exercise: string
  Sets: string
  Reps: string
  Hold: string
  Rest: string
  Link: string
  Notes: string
  isAddOn: string
  Category: string
}

type ExerciseCategory = {
  [key: string]: Exercise[]
}

export const masterExerciseList: ExerciseCategory = {
  "Ankle Mobility": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Dorsiflexion isolations",
      Sets: "4",
      Reps: "15",
      Hold: "",
      Rest: "30-60 seconds between rounds",
      Link: "https://www.youtube.com/shorts/C1Vdz5QJxvU",
      Notes:
        "Work on increasing the distance you can scoot your heel back over time without your heel popping up. This is working on improving your ankle mobility and will likely feel like a strong shin muscle challenge. Do one side, then the other then rest 30-60 seconds.",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Continuous Step-Up Drill",
      Sets: "2",
      Reps: "10",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "https://youtube.com/shorts/_oCxH1YfdaY?feature=share",
      Notes:
        "Use a step or books set to 4-6 inches high (you can stack books if you don't have a step just make sure your whole foot fits and your toes aren't hanging off the edge as this will be less effective).",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Continuous Step-Up Drill",
      Sets: "2",
      Reps: "15",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "https://youtube.com/shorts/_oCxH1YfdaY?feature=share",
      Notes:
        "Use a step or books set to 6-8 inches high (you can stack books if you don't have a step just make sure your whole foot fits and your toes aren't hanging off the edge as this will be less effective).",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "4-Way Step Series",
      Sets: "3",
      Reps: "3 (reaching one leg all 4 directions equals one rep)",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes:
        "Focus on where the weight is going through the ball of your foot and not letting your knee dive inward (don't intentionally pull it outward though just make sure it goes straight ahead. ",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "4-Way Step Series",
      Sets: "4",
      Reps: "3 (reaching one leg all 4 directions equals one rep)",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes:
        "Focus on where the weight is going through the ball of your foot and not letting your knee dive inward (don't intentionally pull it outward though just make sure it goes straight ahead. ",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "Step Up and Overs",
      Sets: "2",
      Reps: "10",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "",
      Notes:
        "Start with a 4-6 inches step (no need to go higher than this).  You can stack books in substitute of the box, just make sure the books are big enough to fit your whole foot (don't want your toes hanging off).",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Step Up and Overs",
      Sets: "2",
      Reps: "15",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "",
      Notes:
        "Use 5-6 inches step (no need to go higher than this).  You can stack books in substitute of the box, just make sure the books are big enough to fit your whole foot (don't want your toes hanging off).",
      isAddOn: "No",
      Category: "Ankle Mobility"
    }
  ],
  "Knee Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Wall Sit (phase 1)",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "Rest 2 minutes between rounds",
      Link: "https://youtube.com/shorts/dgoCYmbIMdc?feature=share",
      Notes:
        "Start with bodyweight (or holding weight if 30 seconds doesn't feel challenging) and work on increasing the length of time you hold this a bit each week. ",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Staggered Wall Sit - Bodyweight",
      Sets: "4",
      Reps: "",
      Hold: "20-45 seconds",
      Rest: "Alternate sides and rest 60-90 seconds between rounds",
      Link: "https://youtube.com/shorts/KjGzted8oHc?feature=share",
      Notes:
        "Start with bodyweight (or holding weight if 30 seconds doesn't feel challenging) and work on increasing the length of time you hold this a bit each week.",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Staggered Wall Sit - add weight",
      Sets: "4",
      Reps: "",
      Hold: "30-45 secs",
      Rest: "Alternate sides and rest 60-90 seconds between rounds",
      Link: "https://youtube.com/shorts/KjGzted8oHc?feature=share",
      Notes:
        "Try adding more weight this month to where 30 seconds requires 80% of your max effort and work on increasing the length of time you hold this a bit each week.",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Lateral Step Up",
      Sets: "2",
      Reps: "10",
      Hold: "",
      Rest: "Alternate sides and rest 60-90 seconds between rounds",
      Link: "needs video",
      Notes: "Use the amount of weight needed to where 5 reps requires 80% of your max effort to complete. ",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Lateral Step Up",
      Sets: "3",
      Reps: "15",
      Hold: "",
      Rest: "Alternate sides and rest 60-90 seconds between rounds",
      Link: "needs video",
      Notes: "Use the amount of weight needed to where 5 reps requires 80% of your max effort to complete. ",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "Eccentric Single Leg Squats",
      Sets: "3",
      Reps: "5-6",
      Hold: "",
      Rest: "Alternate sides and rest 90 seconds between rounds",
      Link: "https://youtube.com/shorts/Z0YtJb4rAps",
      Notes:
        "Focus on a slow controlled lower each rep. If 5 reps feels like it requires less than 80% of your effort to complete, you can increase the challenge of this by holding a weight at the center of your chest throughout the movement. Make sure to keep the weight at your chest the whole time.",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Concentric/Eccentric Single Leg Squats",
      Sets: "3",
      Reps: "5-6",
      Hold: "",
      Rest: "Alternate sides and rest 90 seconds between rounds",
      Link: "https://youtube.com/shorts/6nVKgbQ-BSE?feature=share",
      Notes:
        "If 5 reps feels like it requires less than 80% of your effort to complete, you can increase the challenge of this by holding a weight at the center of your chest throughout the movement. Make sure to keep the weight at your chest the whole time. Do one side, then the other, then rest 2 minutes before starting your next round.",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "Weighted Concentric/Eccentric Single Leg Squats",
      Sets: "3",
      Reps: "5-6",
      Hold: "",
      Rest: "Alternate sides and rest 2 minutes between rounds",
      Link: "https://youtube.com/shorts/HJsDh-_2daQ?feature=share",
      Notes: "Focus on keeping your foot/ankle stable as you move",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 9,
      ExerciseNo: 9,
      Exercise: "Split Squats (+/- weight)",
      Sets: "3",
      Reps: "5-6",
      Hold: "",
      Rest: "Alternate sides and rest 2 minutes between rounds",
      Link: "https://youtube.com/shorts/qYg0viJ3QnM",
      Notes: "Focus on a smooth, controlled lower and then push up quickly",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 10,
      ExerciseNo: 10,
      Exercise: "Split Squats (+/- weight)",
      Sets: "3",
      Reps: "5-6",
      Hold: "",
      Rest: "Alternate sides and rest 2 minutes between rounds",
      Link: "https://youtube.com/shorts/qYg0viJ3QnM",
      Notes: "Focus on a smooth, controlled lower and then push up quickly",
      isAddOn: "No",
      Category: "Knee Strength"
    }
  ],
  "Gluteus Medius Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "isometric clamshells",
      Sets: "3",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "2 mins",
      Link: "https://youtu.be/47wHU6_SvRk",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Side plank (knees bent)",
      Sets: "3",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "2 mins",
      Link: "https://vimeo.com/784946812",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "side plank (knees bent - leg lifted)",
      Sets: "3",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "2 mins",
      Link: "https://youtu.be/SUizQHKyouY?t=31",
      Notes: "Phase 2 (link will take you directly to that version)",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Side plank (knees straight)",
      Sets: "3",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "2 mins",
      Link: "https://vimeo.com/784946719",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "side plank (knees straight - leg lifts)",
      Sets: "3",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "2 mins",
      Link: "https://youtu.be/SUizQHKyouY?t=57",
      Notes: "Phase 4 (link will take you directly to that version)",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "side plank (feet on bench)",
      Sets: "3",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "2 mins",
      Link: "https://youtu.be/xsFdw7Quanw",
      Notes: "Phase 1",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "side plank (feet on bench leg lifted)",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "2 mins",
      Link: "https://youtu.be/CLpMcmqb4pk?t=31",
      Notes: "Phase 2",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "side plank (feet on bench leg lifted)",
      Sets: "3",
      Reps: "6-10",
      Hold: "",
      Rest: "2 mins",
      Link: "https://youtu.be/CLpMcmqb4pk?t=31",
      Notes: "Phase 2",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    }
  ],
  "Gluteus Maximus Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "side lying hip abduction",
      Sets: "3",
      Reps: "15-20",
      Hold: "",
      Rest: "3 mins",
      Link: "https://vimeo.com/784953621?share=copy",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "feet elevated glute bridge (banded)",
      Sets: "3",
      Reps: "15-20",
      Hold: "",
      Rest: "3 mins",
      Link: "https://www.youtube.com/watch?v=Bae0rjrDSlk",
      Notes: "Place a resistance band around your knees and think about pulling your knees apart as you lift up.",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "single leg glute bridge",
      Sets: "3",
      Reps: "10",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/R--dDjYEcjg",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Lateral Step Up",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtube.com/shorts/kJrCHoN1YEY?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "staggered bench deadlift",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtube.com/shorts/zWj8uWoZL6E?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "staggered bench deadlift",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtube.com/shorts/zWj8uWoZL6E?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "front step up",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtube.com/shorts/3cveP_4V8tA?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "front step up",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtube.com/shorts/3cveP_4V8tA?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    }
  ],
  Balance: [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Forward and Reverse Marching",
      Sets: "3",
      Reps: "10",
      Hold: "",
      Rest: "Rest 90 seconds between rounds",
      Link: "Needs video",
      Notes: "Hold the high knee position 2-3 seconds before transitioning to the other side.",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "3-Way Marching",
      Sets: "3",
      Reps: "10",
      Hold: "",
      Rest: "Rest 90 seconds between rounds",
      Link: "https://youtube.com/shorts/FsiLPPYzp5U?feature=share",
      Notes: "Hold the high knee position 2-3 seconds before transitioning to the other side.",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Star Balance with marching/running",
      Sets: "3",
      Reps: "working to 80% fatigue",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "https://youtube.com/shorts/5Og8IsnHjVA?feature=share",
      Notes:
        "Focus on keeping your knee moving straight ahead (not inward) and maintaining stablity through the tripod of your foot (see video for more info)",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "4-Way Step Series",
      Sets: "3",
      Reps: "working to 80% fatigue",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes:
        "Focus on keeping your knee moving straight ahead (not inward) and maintaining stablity through the tripod of your foot (see video for more info)",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "KB Pass",
      Sets: "3",
      Reps: "",
      Hold: "45 seconds",
      Rest: "Alternate sides, rest break optional",
      Link: "Needs video",
      Notes: "Focus on maintaining stability through the tripod of your foot (see video for more info).",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "Lateral Walk with heels elevated",
      Sets: "3",
      Reps: "working to 80% fatigue",
      Hold: "",
      Rest: "Rest 90 seconds between rounds",
      Link: "Needs video",
      Notes: "Focus on maintaining stability through the tripod of your foot (see video for more info).",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Asymmetrics Farmer's March",
      Sets: "3",
      Reps: "10",
      Hold: "",
      Rest: "Rest 90 seconds between rounds",
      Link: "Needs video",
      Notes: "Hold the high knee position 2-3 seconds before transitioning to the other side.",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "4-Way Step Series",
      Sets: "3",
      Reps: "working to 70% fatigue",
      Hold: "",
      Rest: "Alternate sides, rest break optional",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes:
        "Focus on keeping your knee moving straight ahead (not inward) and maintaining stablity through the tripod of your foot (see video for more info).",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 9,
      ExerciseNo: 9,
      Exercise: "Figure 8 Balance",
      Sets: "3",
      Reps: "working to 70% fatigue",
      Hold: "Hold for 45 secs",
      Rest: "Rest 90 seconds between rounds",
      Link: "Needs video",
      Notes: "Focus on maintaining stablity through the tripod of your foot (see video for more info)",
      isAddOn: "No",
      Category: "Balance"
    }
  ],
  "Hamstring Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Double leg isometric",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/hjdEmL-gMOY",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "single leg iso",
      Sets: "3",
      Reps: "",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/nxfNuIFzZeU",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Double leg isometric",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/Xb00ssqRNjQ",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "single leg iso",
      Sets: "3",
      Reps: "",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/BufwRxMPmHs",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Double leg isometric",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/nxfNuIFzZeU",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "single leg iso",
      Sets: "3",
      Reps: "",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/8Xtv7WzzSYM",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "double conc/ecc",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/spMzsuZ_QRs",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "barbell single leg iso",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/hPyaXPn8jCY",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 9,
      ExerciseNo: 8,
      Exercise: "barbell single leg dynamic",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/9cetgBe_0hI",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 10,
      ExerciseNo: 10,
      Exercise: "dumbell single leg iso",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/VJtyEAhKd-s",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 11,
      ExerciseNo: 11,
      Exercise: "dumbell single leg dynamic",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtu.be/SQ0Kx739fmQ",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    }
  ],
  "Calf Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Calf Raise Progression",
      Sets: "3",
      Reps: "25",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtube.com/shorts/vwUR3nCmIN8?feature=share",
      Notes: "Double leg calf version",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Calf Raise Progression",
      Sets: "3",
      Reps: "25",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtube.com/shorts/vwUR3nCmIN8?feature=share",
      Notes: "Double leg calf version",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Calf Raise Progression",
      Sets: "3",
      Reps: "25",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtube.com/shorts/vwUR3nCmIN8?feature=share",
      Notes: "UPDATE: Single leg version.  Record reps for each set below and I'll review these when we check-in.",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Weighted Single Leg Calf Raises (isometric or dynamic)",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtube.com/shorts/0w67SFJQ6Zk?feature=share",
      Notes: "DYNAMIC version (shown in video). Use enough weight to where 5 repetitions requires 80% of your effort.",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Weighted Single Leg Calf Raises (isometric or dynamic)",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtube.com/shorts/0w67SFJQ6Zk?feature=share",
      Notes: "DYNAMIC version (shown in video). Use enough weight to where 5 repetitions requires 80% of your effort.",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "Weighted Single Leg Calf Raises (isometric or dynamic)",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtube.com/shorts/0w67SFJQ6Zk?feature=share",
      Notes: "DYNAMIC version (shown in video). Use enough weight to where 5 repetitions requires 80% of your effort.",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Weighted Single Leg Calf Raises (isometric or dynamic)",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtube.com/shorts/0w67SFJQ6Zk?feature=share",
      Notes: "DYNAMIC version (shown in video). Use enough weight to where 5 repetitions requires 80% of your effort.",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "Calf Raise Assessment",
      Sets: "3",
      Reps: "as many reps as possible",
      Hold: "",
      Rest: "Do one side, then the other, then rest 2 full minutes before beginning the next round",
      Link: "https://youtu.be/KysIVCkHZMs",
      Notes:
        "Time to retest! We'll use your updated data to track your progress and adjust accordingly. You get one month off from calf strengthening (no, it won't impede your progress). Enjoy :)",
      isAddOn: "No",
      Category: "Calf Strength"
    }
  ],
  "Front Planks": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Static front plank",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "1-2 mins",
      Link: "https://vimeo.com/784955485",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "front plank with hip extension",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "1-2 mins",
      Link: "https://vimeo.com/784947211",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "front plank with leg lifts",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "1-2 mins",
      Link: "https://vimeo.com/784947043",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Bench lifts",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "1-2 mins",
      Link: "https://youtu.be/JkBwNA1air4",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "3-5",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "4-7",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "8-10",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    }
  ]
}

export default masterExerciseList
