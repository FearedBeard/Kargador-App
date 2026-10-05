const EXERCISES={
press:{name:'Dumbbell Floor Press',sets:3,range:[8,15],weight:6,mode:'pair',compound:true,cues:['Keep wrists above elbows','Lower with control','Pause gently on the floor'],variants:['Dumbbell Floor Press','Light Floor Press'],next:'Add the smallest available load, or slow the lowering.'},
overhead:{name:'Standing Dumbbell Overhead Press',sets:2,range:[8,12],weight:4,mode:'pair',compound:true,cues:['Keep ribs down','Press smoothly','Use a comfortable range'],variants:['Standing Dumbbell Overhead Press','Seated Light Press']},
lateral:{name:'Dumbbell Lateral Raise',sets:2,range:[10,15],weight:2.5,mode:'pair',cues:['Soft elbows','Raise only to a comfortable height','Avoid swinging'],variants:['Dumbbell Lateral Raise','Bent-Elbow Light Raise']},
triceps:{name:'Two-Hand Overhead Triceps Extension',sets:2,range:[8,12],weight:6,mode:'single',cues:['Use a light load','Keep elbows comfortable','Stop if uncomfortable'],variants:['Two-Hand Overhead Triceps Extension','Close-Grip Dumbbell Floor Press','Light Close-Grip Floor Press']},
row:{name:'Bent-Over Dumbbell Row',sets:3,range:[8,15],weight:5,mode:'pair',compound:true,cues:['Hinge at the hips','Keep back comfortable and steady','Pull toward lower ribs'],variants:['Bent-Over Dumbbell Row','Supported Dumbbell Row','Barbell Row']},
singleRow:{name:'Single-Arm Dumbbell Row',sets:2,range:[8,15],weight:6,mode:'single',sides:true,compound:true,cues:['Support your free hand','Keep hips steady','Lower slowly'],variants:['Single-Arm Dumbbell Row','Light Supported Row']},
rear:{name:'Rear Delt Fly',sets:2,range:[10,15],weight:2.5,mode:'pair',cues:['Use a light load','Keep a soft elbow bend','Avoid shrugging'],variants:['Rear Delt Fly','Supported Light Rear Delt Fly']},
curl:{name:'Standard Dumbbell Curl',sets:3,range:[8,15],weight:4,mode:'pair',cues:['Keep elbows still','Avoid swinging','Lower with control'],variants:['Standard Dumbbell Curl','Light Standard Curl','Hammer Curl']},
squat:{name:'Goblet Squat',sets:3,range:[8,15],weight:6,mode:'single',compound:true,cues:['Keep chest comfortably upright','Sit down between your hips','Use a comfortable depth'],variants:['Goblet Squat','Supported Bodyweight Squat','Chair Squat']},
rdl:{name:'Dumbbell Romanian Deadlift',sets:3,range:[8,15],weight:5,mode:'pair',compound:true,cues:['Soft knees','Push hips back','Keep the load close'],variants:['Dumbbell Romanian Deadlift','Light Dumbbell Hip Hinge','Bodyweight Hip Hinge','Barbell Romanian Deadlift']},
lunge:{name:'Supported Reverse Lunge',sets:2,range:[8,12],weight:0,mode:'single',sides:true,cues:['Use a stable support','Take a comfortable step back','Move slowly'],variants:['Supported Reverse Lunge','Supported Split Squat','Supported Bodyweight Squat']},
calf:{name:'Standing Calf Raise',sets:3,range:[12,20],weight:4,mode:'pair',cues:['Use support for balance','Rise slowly','Lower fully with control'],variants:['Standing Calf Raise','Supported Bodyweight Calf Raise']},
plank:{name:'Plank Progression',sets:2,range:[10,30],weight:0,timed:true,cues:['Keep breathing','Keep a comfortable straight line','Stop before form breaks'],variants:['Incline Plank','Knee Plank','Full Plank'],next:'Build clean holds toward 30 seconds, then consider the next variation.'}
};
const PROGRAMS={Push:['press','overhead','lateral','triceps','plank'],Pull:['row','singleRow','rear','curl','plank'],Legs:['squat','rdl','lunge','calf','plank']};
const MINIMUM={Push:['press','overhead','triceps'],Pull:['row','singleRow','curl'],Legs:['squat','rdl','calf']};
const WARMUP=[['March in Place','45–60 seconds'],['Arm Circles','20 seconds each direction'],['Bodyweight Squats','8–10 controlled reps'],['Hip Hinge','8–10 controlled reps']];
if(typeof module!=='undefined')module.exports={EXERCISES,PROGRAMS,MINIMUM};

