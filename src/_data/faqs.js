// Research-based FAQ. One source for both the rendered accordion and the FAQPage JSON-LD.
// Every answer names a real, established concept. No invented statistics, studies, or citations.
// Add an item here and it appears in the page AND in the structured data automatically.
// `link` is optional and must point at a page that exists (a dangling ref fails the build gate).
// `linkText` is optional and defaults to "Read the full idea".
const groups = [
  {
    id: "overreacting-and-anger",
    category: "Overreacting and getting angry easily",
    items: [
      {
        q: "How do I stop overreacting to small things?",
        a: "Overreacting happens in the first few seconds, before you have decided anything. The simplest fix is a pause: one slow breath, or ten seconds, before you respond. In that gap the spike of heat starts to fall on its own, and a steadier version of you gets to answer instead of the reflex.",
        link: "/blog/the-power-of-the-pause/",
      },
      {
        q: "Why do I get angry or upset so easily?",
        a: "Often it is not really about the moment. A small thing sets off a reaction that is far too big for it because it landed on an old, tender spot, or because you were already tired, hungry, and stretched thin. When a reaction feels out of proportion, the extra size is pointing at something underneath, not at the person in front of you.",
        link: "/blog/sometimes-its-not-the-trigger/",
      },
      {
        q: "Why do I overreact to small things but stay calm with big ones?",
        a: "Big problems get your full, deliberate attention, while small ones slip past your guard and hit while you are on autopilot. Small provocations also tend to land when your reserves are low, so the same comment that rolls off on a good day flattens you on a bad one. Most of your peace leaks away through the small stuff.",
        link: "/blog/you-lose-it-in-small-leaks/",
      },
      {
        q: "Is it bad to overreact?",
        a: "The reaction itself is human and brief. The cost is what lingers: the replaying, the tension, the strained relationship, the lost sleep. The event lasts a second, but you often keep paying for it long after, which is why learning to not react is worth the effort.",
        link: "/blog/the-reaction-is-short-the-tail-is-long/",
      },
      {
        q: "How do I control my temper?",
        a: "You control it mostly before the hot moment, not during it. Decide your rule in advance, for example, anything written in anger waits until morning, and in the moment, pause before you act. You cannot count on being wise in your worst second, so let your calm self, who made the rule, protect you.",
        link: "/blog/deciding-before-you-are-hot/",
      },
      {
        q: "Why do I say things I regret when I am angry?",
        a: "In the heat you are not really choosing your words; the reflex is. That is why the sharp line or the exaggeration comes out, and why you regret it once you cool down. A pause puts a gap between the feeling and the words, so the wiser you speaks instead.",
        link: "/blog/the-pause-buys-a-better-you/",
      },
    ],
  },
  {
    id: "triggers",
    category: "Triggers",
    items: [
      {
        q: "Why do certain things trigger me so much?",
        a: "A trigger that sets off a big reaction is usually touching an old bruise, a fear or hurt from long before this moment. The other person pressed the button, but the button was already there, wired to go off. Studying your triggers shows you where you still need care.",
        link: "/blog/your-triggers-are-old-bruises/",
      },
      {
        q: "How do I figure out my triggers?",
        a: "Look back, gently, at the moments you reacted, and notice the pattern. Most people do not have a hundred triggers; they have a short, repeating list, being disrespected, ignored, criticized, controlled. Once you can name yours, you start to see them coming.",
        link: "/blog/the-same-few-triggers/",
      },
      {
        q: "Why does criticism hurt so much?",
        a: "Criticism rarely lands on fresh ground. It lands on every time you felt not good enough, so a small note about your work can tilt your whole day. Splitting the actual feedback from the old ache it brushed makes the feedback usable and the sting easier to set down.",
        link: "/blog/why-criticism-lands-so-hard/",
      },
      {
        q: "Why do I get so defensive?",
        a: "When you might be wrong, an old, fast part of you treats it like a threat and rushes to defend, not the fact, but a picture of yourself. Being wrong about something is not actually dangerous; it is just information. Seeing that the heat is guarding an image, not you, lets the defensiveness loosen.",
        link: "/blog/why-being-wrong-feels-like-danger/",
      },
      {
        q: "Why do small comments bother me more than they should?",
        a: "The size of a reaction is a clue. When it is far bigger than the event, most of that heat is not about now; it is an old wound the moment brushed against. Ask why it landed so hard, and the answer usually points past the person to something older.",
        link: "/blog/the-size-tells-you-something/",
      },
    ],
  },
  {
    id: "reacting-versus-responding",
    category: "Reacting versus responding, and staying calm in the moment",
    items: [
      {
        q: "What is the difference between reacting and responding?",
        a: "A reaction is a reflex; it happens to you, fast and automatic, before you decide anything. A response has a gap in it, a moment where you saw the trigger, considered, and chose. The whole skill is turning more of your reactions into responses.",
        link: "/blog/reaction-is-reflex-response-is-choice/",
      },
      {
        q: "How do I stay calm under pressure?",
        a: "Calm under pressure is built, not summoned. Do the deciding earlier, with rules made while you are steady, pause in the hot moment, and do not match the other person's heat. A fire needs fuel; when you stay level, the pressure often comes down on its own.",
        link: "/blog/do-not-match-the-heat/",
      },
      {
        q: "How do I calm down in the moment?",
        a: "Reach for something small and physical: one slow breath, a glass of water, a step outside, a short walk. The heat spikes fast and falls just as fast if you stop feeding it, so the point is simply to not act for a minute while the wave passes.",
        link: "/blog/the-pause-shrinks-the-heat/",
      },
      {
        q: "How do I stay calm when someone attacks me?",
        a: "Respond to the person, not the jab. A sharp attack almost always comes from someone having a hard time, so meeting the human instead of the weapon defuses more than any comeback. Keep your voice steady, ask a question instead of firing back, and refuse to add heat.",
        link: "/blog/respond-to-the-person-not-the-jab/",
      },
      {
        q: "Does counting to ten actually work?",
        a: "Yes, for a simple reason. The spike of a reaction is short, and its worst few seconds are exactly when your judgment is poorest. Counting keeps you from acting during that window, so by ten a slightly steadier you is the one who speaks.",
        link: "/blog/count-to-ten-really/",
      },
      {
        q: "How can I stop reacting emotionally?",
        a: "The aim is not to feel less; it is to be moved less, to feel the thing fully and still choose what you do. That choice lives in the pause between what happens and what you do next. Widen that gap, even a little, and you stop being run by the feeling.",
        link: "/blog/the-pause-is-where-you-live/",
      },
    ],
  },
  {
    id: "being-right-and-arguments",
    category: "Being right, arguments, and the last word",
    items: [
      {
        q: "Why do I always need to be right?",
        a: "The hard need to be right is usually fear wearing armor, a shaky sense of self that treats being wrong as exposure. A secure person can hear a challenge and stay easy. Seeing that your worth is not on trial takes most of the urgency out of it.",
        link: "/blog/the-need-to-be-right-is-fear/",
      },
      {
        q: "Why does winning an argument not feel good?",
        a: "Because being right and being at peace are often two different things. You can win the point and lose the evening to replaying it, or lose the closeness with the person you beat. A day later you rarely remember the point, only whether the night was calm or wrecked.",
        link: "/blog/winning-the-argument-losing-the-evening/",
      },
      {
        q: "How do I stop needing the last word?",
        a: "The last word keeps you in the ring; as long as you need it, you are still fighting. Letting it go is not backing down, it is choosing to step out. Try it once and notice that nothing bad happens, and that you feel lighter for not needing it.",
        link: "/blog/the-last-word-is-a-trap/",
      },
      {
        q: "Should I correct people when they are wrong?",
        a: "Only when it actually matters. Most wrong things are harmless, and correcting them changes nothing except the mood of the room and how tiring you are to be around. Save your corrections for what would cause real harm, and let the rest pass.",
        link: "/blog/let-them-be-wrong/",
      },
      {
        q: "How do I stop arguing so much?",
        a: "Before you engage, ask whether this actually matters, whether speaking will change anything, and what it will cost you. Most arguments do not survive those questions honestly asked. Often the urge to argue is just the heat talking, not something that needed saying.",
        link: "/blog/four-questions-before-you-argue/",
      },
    ],
  },
  {
    id: "the-pause",
    category: "The pause",
    items: [
      {
        q: "How do I pause before reacting?",
        a: "Start with one breath, taken on purpose, the instant something stings. You do not have to be wise in that breath; you just have to not fire yet. Practice it on small annoyances so it is there for the big ones.",
        link: "/blog/the-breath-before-the-reply/",
      },
      {
        q: "How do I stop responding immediately?",
        a: "Give yourself permission to not answer right now, and even say so: let me think about that and come back to you. Far fewer situations need an instant reply than the reactive mind claims. A considered answer is almost always better than a fast one.",
        link: "/blog/the-pause-you-say-out-loud/",
      },
      {
        q: "What should I do when I want to send an angry message?",
        a: "Write it if you must, then do not send it. Come back in an hour, or the morning, and read it again. Almost every time you will soften it or not send it at all, and you will be glad the hot version of you did not get the last word.",
        link: "/blog/the-email-you-dont-send/",
      },
      {
        q: "How long should I wait before reacting?",
        a: "Fit the pause to the stakes. A small annoyance needs a breath, a sharp message deserves an hour, and a big decision deserves a night or more. The bigger and harder to undo the thing is, the longer you let it sit.",
        link: "/blog/match-the-pause-to-the-stakes/",
      },
    ],
  },
  {
    id: "silence-versus-speaking-up",
    category: "Silence versus speaking up",
    items: [
      {
        q: "Is it better to stay silent or speak up?",
        a: "Speak when silence would let real harm or quiet resentment continue, or when someone genuinely asks for your honest view. The rest of the time, ask whether your words would actually improve something, or whether you only want to be right. Most provocations deserve your calm, not your comment.",
        link: "/blog/when-to-speak-and-when-to-stay-silent/",
      },
      {
        q: "Is staying calm the same as suppressing my feelings?",
        a: "No. Suppressing is pretending you do not feel it; staying calm is feeling it fully and choosing what to do. There are two silences: the chosen kind that leaves you light, and the swallowed kind that turns into resentment. Aim for the first, and if something real keeps gnawing, say it later, calmly.",
        link: "/blog/chosen-silence-vs-swallowed-silence/",
      },
      {
        q: "How do I stay quiet without bottling things up?",
        a: "Feel the thing fully, admit it to yourself, and then decide freely what to do, which is sometimes nothing. If it needs to come out, write it for yourself, or say it later and better once the heat has drained. Holding your tongue in the moment is not the same as burying it.",
        link: "/blog/feel-it-without-saying-it/",
      },
      {
        q: "Does not reacting make me a pushover?",
        a: "No. Not reacting is for the small provocations that do not deserve your peace; it is never an instruction to accept real mistreatment. Staying calm is how you think clearly enough to act well, including naming a genuine wrong plainly. Calm is not the same as silent.",
        link: "/blog/calm-is-not-a-doormat/",
      },
    ],
  },
  {
    id: "reacting-online",
    category: "Reacting online",
    items: [
      {
        q: "How do I stop getting angry on social media?",
        a: "Remember what the feed is actually selling: your outrage. The most enraging thing is put in front of you on purpose, because your reaction is what keeps you scrolling. Naming that, this is the machine doing its job, loosens its grip, and curating what you follow does the rest.",
        link: "/blog/outrage-is-the-product/",
      },
      {
        q: "How do I stop arguing with strangers online?",
        a: "It is a game with no win condition. Nobody has ever been argued into agreement by a stranger in a comment thread; both people just leave more entrenched. When you feel the pull, remember you cannot win it, only lose time and calm to it, and scroll on.",
        link: "/blog/arguing-with-strangers/",
      },
      {
        q: "How do I stop doomscrolling?",
        a: "Name it for what it is: a slow reaction, a nervous reaching for the next hit of alarm. Then meet it like any reaction, notice it and put the phone down. Setting a timer before you go in, and getting out when it rings, keeps the endless feed from taking your evening.",
        link: "/blog/doomscrolling-is-a-reaction/",
      },
      {
        q: "Why does the news make me so anxious?",
        a: "The news is built to feel like an emergency, so you carry a constant low hum of alarm about things you cannot touch. You can stay informed without treating every headline as a fire in your own house. Hold it at a distance, act where you actually can, and let go of the rest.",
        link: "/blog/the-news-is-not-your-emergency/",
      },
    ],
  },
  {
    id: "after-you-react",
    category: "After you react",
    items: [
      {
        q: "What should I do right after I lose my temper?",
        a: "Keep the cleanup simple: name it, own it, move on. A short, honest word soon after, I overreacted, that was not fair, I am sorry, mends more than a long, tangled apology days later. Then let it go rather than dragging it out.",
        link: "/blog/the-cleanup-is-simple/",
      },
      {
        q: "How do I stop feeling guilty after overreacting?",
        a: "Watch for the second wave, the self-attack that says I always ruin things. That is just another reaction, aimed at yourself, and it fixes nothing while costing you the whole day. Own the slip, learn the one thing it has to teach, and be as gentle with yourself as you would be with a friend.",
        link: "/blog/dont-react-to-your-reaction/",
      },
      {
        q: "I lost my temper again after trying to change. Have I failed?",
        a: "No. One slip does not erase weeks of steadiness any more than one missed workout erases a year of fitness. Progress here is a jagged line that trends upward, with dips built in. The people who get calmer are simply the ones who did not let a slip talk them into quitting.",
        link: "/blog/the-slip-is-not-the-end/",
      },
      {
        q: "How do I apologize after overreacting?",
        a: "Cleanly, and asking for nothing. I was wrong, I am sorry, and then stop. Do not over-explain or fish for reassurance; a real apology takes responsibility and leaves the other person free.",
        link: "/blog/the-apology-that-asks-nothing/",
      },
    ],
  },
  {
    id: "becoming-calmer",
    category: "Becoming a calmer person",
    items: [
      {
        q: "How do I become a calmer person?",
        a: "Steadiness is built, not born; the calm people you envy mostly practiced their way there. It comes from many small choices to pause instead of react, made over ordinary days until it becomes who you are. Every pause is a brick.",
        link: "/blog/steadiness-is-built-not-born/",
      },
      {
        q: "How long does it take to stop being so reactive?",
        a: "There is no finish line; it is a practice you keep returning to, not a prize you win once. But you feel the change in hindsight, when something that would have wrecked last year's week barely touches this one. Start small, and measure the catches, not just the slips.",
        link: "/blog/the-person-you-are-becoming/",
      },
      {
        q: "What daily habits help me stay calm?",
        a: "A few small, repeatable things lower the daily temperature: protecting your sleep, a little stillness, some movement, fewer inputs, and a moment of noticing what is good. None of it is dramatic. It just means that when something lands, you have more room to meet it.",
        link: "/blog/daily-habits-for-a-steady-mind/",
      },
      {
        q: "Why am I more reactive when I am tired?",
        a: "Because your ability to stay calm rises and falls with how well you are looking after yourself. Tired, hungry, and stretched thin, the same comment that usually rolls off lands like the last straw. Some of your worst reactions are not a character flaw; they are an empty tank.",
        link: "/blog/hungry-angry-tired/",
      },
      {
        q: "Can I really change how reactive I am?",
        a: "Yes. Reactivity is not a fixed trait or a character flaw; it is old wiring and habit, and habits can be unlearned. You are not broken, you are reactive, and that is a hopeful thing, because it means there is something to practice.",
        link: "/blog/you-are-not-broken-you-are-reactive/",
      },
      {
        q: "What is the single most useful thing I can do?",
        a: "Build the pause. Almost the entire skill comes down to the small gap between what lands and what you do. When a message stings, put the phone down and answer in an hour; when a meeting heats up, say you will come back to it. The gap is where all the freedom lives.",
        link: "/blog/the-power-of-the-pause/",
      },
    ],
  },
  {
    id: "your-body-in-a-reaction",
    category: "What happens in your body when you react",
    items: [
      {
        q: "What is actually happening in my body when I snap?",
        a: "Your body has started an acute stress response before your thinking has caught up. The brain's fast threat appraisal reads something as a danger, and stress hormones raise your heart rate, tense your muscles, and narrow your attention onto the threat. That is why the reaction feels like it happened to you. It did, for the first moment; what you do next is still yours.",
      },
      {
        q: "Why does my heart pound and my face get hot in an argument?",
        a: "That is physiological arousal, the body's alarm system switching on. In conflict research this is called flooding: heart rate climbs, and the state that helps you fight or flee is a poor state for listening or choosing words. Treat it as information rather than a verdict. When you notice the pounding, that is your cue to slow down or step away.",
      },
      {
        q: "Why can I not think straight in the middle of an argument?",
        a: "Because arousal narrows your attention. Under physiological flooding the mind gets very good at defending and very bad at nuance, memory, and generosity, which is why you reach for old lines and miss what the other person actually said. This is not a character failure. It is a predictable state, and it passes if you stop feeding it.",
      },
      {
        q: "Does slow breathing really calm you down?",
        a: "Yes, and there is a physical reason for it. Slow, paced breathing with a longer out-breath supports parasympathetic recovery, the branch of the nervous system that brings arousal back down. It will not erase the feeling, and it is not meant to. It gives your body a way out of the alarm state while your thinking catches up.",
        link: "/blog/the-breath-before-the-reply/",
      },
      {
        q: "How long does it take to feel normal again after a fight?",
        a: "Longer than the fight itself, usually. Physiological arousal falls more slowly than it rises, so your body can still be running warm well after the words have stopped, which is why a second round starts so easily. Give yourself a real break before you return to it. Do something calming rather than rehearsing the argument, or the arousal simply stays up.",
        link: "/blog/the-hangover-of-a-blowup/",
      },
      {
        q: "Why do I not notice I am getting angry until it is too late?",
        a: "Because you are not reading your own body early enough. Interoception, the sense of your internal state, is what lets you catch the jaw tightening or the breath going shallow before the words come out. Most people can improve it with attention. Check in with your body a few times a day when nothing is wrong, and the early signal becomes easier to spot when something is.",
        link: "/blog/the-body-keeps-a-short-score/",
      },
      {
        q: "Why do I go blank and shut down instead of getting angry?",
        a: "Shutting down is another branch of the same stress response. Where one person fights, another freezes or withdraws, and in conflict research the withdrawing version is called stonewalling. It is often flooding rather than indifference, though it rarely reads that way to the other person. Say it out loud: tell them you need a short break and will come back.",
      },
    ],
  },
  {
    id: "replaying-and-rumination",
    category: "Replaying it afterwards",
    items: [
      {
        q: "Why do I replay arguments in my head at night?",
        a: "Because the mind treats an unresolved threat as unfinished business. This is rumination: repetitive, passive turning over of an upset, and research on it finds that replaying tends to prolong the feeling rather than resolve it. Night is when the distractions are gone. Give the thought a place to go by writing the one thing you will actually do tomorrow, then let the rest wait.",
        link: "/blog/the-replay-tax/",
      },
      {
        q: "How do I stop overthinking a conversation that already ended?",
        a: "Separate rumination from problem solving. Rumination asks why did this happen to me and loops; problem solving asks what will I do and finishes. If there is an action, name it and schedule it. If there is not, the thinking has no work left to do, and the honest move is to redirect your attention rather than wait for the loop to satisfy itself.",
      },
      {
        q: "Why does venting about it not make me feel better?",
        a: "Because venting mostly rehearses the anger. The old idea of catharsis, that anger drains away if you let it out, is not supported; studies of venting find it tends to keep arousal up and make later aggression more likely, not less. Talking still helps when it moves you toward understanding or a decision. It is the retelling of the outrage, over and over, that keeps the fire lit.",
      },
      {
        q: "Does talking to a friend about it help or make it worse?",
        a: "It depends on what the conversation does. Support that helps you see the thing differently, or decide something, tends to settle you. Co-rumination, where two people go over the same grievance in detail, tends to deepen it instead. Notice which one you are doing. A useful thing to ask a friend is what you might be missing, rather than whether you were right.",
      },
      {
        q: "How do I stop thinking about what I should have said?",
        a: "Answer the thought once, then stop feeding it. The perfect comeback arriving hours later is normal, because the calm mind has access to words the flooded one did not. Write the line down if it helps, then notice that you do not actually want to go back and use it. What you want is for the moment to be over, and it already is.",
      },
      {
        q: "Why can I give a friend good advice but not take it myself?",
        a: "This is a well-documented gap, sometimes called Solomon's paradox: people reason more wisely about other people's problems than about their own. The reason is distance. When it is your problem you are inside it, and the reasoning gets narrower. You can borrow the distance deliberately by asking what you would tell a friend in exactly this position, then following your own answer.",
      },
      {
        q: "Does writing it down help, or does it keep the upset alive?",
        a: "Writing helps when it makes meaning and hurts when it only rehearses. Expressive writing research finds benefit when people move from raw complaint toward understanding, using words that explain and connect rather than just replay. So write freely, but end by answering two questions: what does this tell me, and what will I do. Then close the notebook.",
        link: "/blog/write-it-for-yourself/",
      },
    ],
  },
  {
    id: "anxiety-and-assuming-the-worst",
    category: "Anxiety, dread, and assuming the worst",
    items: [
      {
        q: "Why do I brace for bad news even when nothing is wrong?",
        a: "Because your threat system is set to be over-inclusive. Threat appraisal errs toward false alarms, because missing a real danger costs more than a run of unnecessary alerts, and the price of that setting is a background hum of dread. Naming it as a setting rather than a signal helps. Ask what evidence you actually have, and notice how thin it usually is.",
      },
      {
        q: "Why does one piece of criticism outweigh all the praise?",
        a: "Because negative information carries more weight than positive information of the same size. Researchers summarize this as bad being stronger than good: unpleasant events register faster, last longer, and shape memory more than pleasant ones. Knowing this does not make the sting vanish, but it lets you correct for it. Deliberately reread the good feedback, because your mind will not do it for you.",
      },
      {
        q: "How do I stop assuming a short message means someone is annoyed?",
        a: "Assume less and check more. Written messages strip out tone, and when meaning is ambiguous people tend to fill the gap with threat. The habit of reading hostility into neutral cues is called hostile attribution bias. Before you respond, write down two other readings that also fit the words. If it still matters, ask plainly what they meant.",
        link: "/blog/the-story-you-never-checked/",
      },
      {
        q: "Why do I feel sick with nerves before a difficult conversation?",
        a: "Because your body is preparing for what it has appraised as a threat. The same arousal can be appraised as a challenge instead, and that reading tends to produce steadier performance than treating it as danger. Notice the racing feeling and tell yourself it is your body getting ready. Then prepare the first two sentences, so the hardest part is already decided.",
      },
      {
        q: "Does avoiding the thing that makes me anxious make it worse?",
        a: "Usually, yes. Avoidance brings relief now and teaches your nervous system that the thing really was dangerous, so the fear keeps its size. The opposite process is habituation: staying with a manageable version of the situation long enough for the alarm to come down on its own. Start smaller than feels impressive. Repetition, not intensity, is what does the work.",
      },
      {
        q: "How do I calm down before a presentation or a hard meeting?",
        a: "Prepare the state, not just the content. Slow breathing before you go in brings arousal down, and reappraising the nerves as readiness rather than fear tends to help more than trying to feel nothing. Rehearse the opening until it is automatic. What you are building is stress inoculation: enough small exposure that the real moment is familiar rather than novel.",
      },
      {
        q: "Is my anger actually anxiety or hurt underneath?",
        a: "Often it is. Anger is fast and gives you something to do, so it frequently arrives on top of fear, shame, or hurt, which are slower and more uncomfortable to sit with. Work on emotional granularity, the skill of telling feelings apart with precision. Ask what else is here besides angry, and the honest answer usually changes what you need to say.",
      },
    ],
  },
  {
    id: "staying-steady-at-work",
    category: "Staying steady at work",
    items: [
      {
        q: "How should I reply to an email that reads as rude?",
        a: "Assume the tone is missing, not hostile. Text carries no face or voice, so ambiguity gets filled in by the reader, and a busy person writing fast produces the same words as an annoyed one. Draft your reply, then wait before sending it. If the message truly needs addressing, ask a plain question rather than mirroring the tone you think you heard.",
        link: "/blog/the-email-at-nine-at-night/",
      },
      {
        q: "How do I stay calm when someone takes credit for my work?",
        a: "Separate the sting from the decision. The flash of injustice is real, and acting inside it usually costs you more than the credit did, because the flooded version of you will overstate the case. Wait until you are level, then state the facts plainly to the person who needs them. Quiet, specific, and unheated is far harder to dismiss than aggrieved.",
      },
      {
        q: "What do I do when my manager criticizes me in front of others?",
        a: "Handle the moment briefly and the substance later. In public the threat is to your standing, which floods people fast, so keep your reply short and neutral and ask to pick it up afterward. Later, use self-distancing: look at the feedback as if it were addressed to someone else, take what is accurate, and raise the way it was delivered separately.",
      },
      {
        q: "How do I stop taking work feedback personally?",
        a: "Put the feedback next to your work, not next to your worth. Criticism feels like a threat to identity, and that appraisal is what turns a note about a document into a bad week. It helps to step back and read the note as advice given to a colleague you like, a move researchers call self-distancing. Then take the one usable instruction and leave the rest.",
      },
      {
        q: "How do I keep my head when a meeting turns hostile?",
        a: "Do not match the temperature. Arousal is contagious in groups, and the person who stays level often resets the room, while the person who matches heat guarantees an escalation. Slow your speech and lower your volume on purpose. Ask a genuine question about the other position, which forces both of you out of attack mode and back into thinking.",
        link: "/blog/lower-your-voice-on-purpose/",
      },
      {
        q: "Why do I bring work stress home and snap at my family?",
        a: "Because the arousal does not end when the workday does. Stress spills over: the tension from one setting carries into the next, and after a day of holding your reactions in, the demands at home meet a smaller reserve. Build a deliberate gap between the two. A short walk, a change of clothes, ten quiet minutes in the car, anything that marks the end of work mode.",
        link: "/blog/leaving-work-mode-at-home/",
      },
      {
        q: "How do I handle a passive aggressive coworker?",
        a: "Answer the content, not the hint. Indirect digs work by being deniable, so responding to the implication gives them the argument and makes you look like the difficult one. Ask a plain, friendly question about what they actually need. If a pattern is doing real damage, raise it once, specifically and unheated, with examples rather than adjectives.",
      },
    ],
  },
  {
    id: "family-and-parenting",
    category: "Family, partners, and parenting",
    items: [
      {
        q: "Why do I lose my temper with the people I love most?",
        a: "Because home is where you stop performing. All day you use effortful emotion regulation with people whose goodwill you cannot assume, and the people who will forgive you get the unedited version. Familiarity also means the same small frictions repeat until they carry history. Naming that out loud, and apologizing quickly, keeps the pattern from hardening.",
      },
      {
        q: "How do I stop having the same argument with my partner over and over?",
        a: "Change how it starts. Conflict research finds that the way the first minutes go predicts how the whole conversation goes, and a harsh start-up almost guarantees defensiveness. Open with what you feel and what you want rather than with what is wrong with them. Then watch for the four patterns that damage couples most: criticism, contempt, defensiveness, and stonewalling.",
      },
      {
        q: "How do I raise something without it turning into a fight?",
        a: "Lead with your experience, not their character. Starting with I felt rather than you always keeps the other person out of defense mode, because a character claim invites a rebuttal while a feeling does not. Be specific about the one incident. Say what you would like instead, and ask what they see, so it stays a conversation rather than a verdict.",
        link: "/blog/i-felt-not-you-always/",
      },
      {
        q: "How do I stay calm when my child pushes every button?",
        a: "Regulate yourself first, because children borrow your state. Co-regulation means a calm adult nervous system helps a dysregulated child settle, while a raised voice adds arousal to a system that already has too much. Get your own breathing down before you speak. Say less, move slower, and deal with the behavior once everyone is back below the boil.",
      },
      {
        q: "Why do my parents still trigger me as an adult?",
        a: "Because those reactions were learned early and practiced for years. Family roles are deeply grooved, and a familiar tone can start the old response before your adult judgment arrives. It is the same trigger mechanism as anywhere else, with far more repetitions behind it. Decide in advance how you will answer the predictable line. Old grooves fade with new responses, slowly.",
        link: "/blog/the-trigger-behind-the-trigger/",
      },
      {
        q: "How do I stop shouting at my kids?",
        a: "Decide the alternative before the moment arrives. An if-then plan, the approach researchers call an implementation intention, works better than a general resolution: if my voice starts to rise, then I leave the room for one minute. Practice it when things are calm. Repair quickly when you slip, because children learn as much from watching a repair as from a perfect record.",
        link: "/blog/the-emergency-plan/",
      },
      {
        q: "How do I stop a family group chat from ruining my day?",
        a: "Change your exposure before you try to change your reaction. Written messages lose tone and gain edge, and a group makes people bolder than they would be face to face, which is the online disinhibition effect at family scale. Mute it and read at a chosen time. Answer the practical parts and leave the bait, because a reply is what keeps a thread alive.",
        link: "/blog/the-family-thread/",
      },
      {
        q: "What do I do when my partner goes silent in the middle of an argument?",
        a: "Treat it as flooding rather than punishment. When arousal climbs past a certain point people stop being able to take in new information, and withdrawing is what the body does to protect itself. Conflict research calls it stonewalling. Agree in advance on a break signal and a time to return. The break only works if you use it to settle rather than rehearse.",
      },
    ],
  },
  {
    id: "difficult-people-and-resentment",
    category: "Difficult people and resentment",
    items: [
      {
        q: "How do I deal with someone who seems to enjoy provoking me?",
        a: "Stop supplying the payoff. A behavior that gets no reaction tends to fade, which is what extinction means in learning research, while an occasional big reaction is exactly the pattern that keeps it going. Be consistently unremarkable in your response. Keep it polite, short, and boring, and take the real conversation elsewhere if something genuinely needs addressing.",
      },
      {
        q: "Why do I assume people are being rude on purpose?",
        a: "Because you see their behavior and your own circumstances. The fundamental attribution error is the habit of explaining what others do by their character while explaining what you do by your situation, so their curt reply is rudeness and yours was a bad morning. Give them the situation you would want. It is usually the more accurate guess, not just the kinder one.",
        link: "/blog/the-generous-interpretation/",
      },
      {
        q: "How do I let go of resentment I have carried for years?",
        a: "Start by noticing what keeps it alive. Resentment survives on rehearsal, the quiet rumination that reruns the wrong and keeps the feeling fresh, so the first move is to stop retelling the story to yourself. That is not the same as saying it was fine. You can hold that it was wrong and still decline to carry it every day.",
      },
      {
        q: "Do I have to forgive someone to move on?",
        a: "You do not have to reconcile, and you do not have to say it was acceptable. Forgiveness in the research sense means letting go of the wish to retaliate and the constant rehearsal of the injury, which is something you do for your own peace. It can happen without contact and without a conversation. Moving on is the aim, and forgiveness is one road to it.",
      },
      {
        q: "How do I stay calm around someone I cannot avoid?",
        a: "Plan the specific moments rather than hoping to feel differently. An if-then plan attached to the exact cue works better than a resolution to be patient: if he starts on that topic, then I ask about something else and leave in ten minutes. Lower your expectations to what is actually likely. Most of the sting comes from expecting a different person than the one who shows up.",
      },
      {
        q: "How do I set a boundary without getting angry?",
        a: "Say it early, while you are still calm. Boundaries voiced late come out as accusations, because by then resentment has built and the words carry all the times you stayed quiet. Decide the sentence in advance, and aim for assertive rather than aggressive: short, specific, and about your own limit. A boundary states what you will do, not who they should be.",
      },
      {
        q: "How do I stop being hurt by someone who clearly does not care?",
        a: "Stop waiting for them to supply the repair. Most of the ongoing pain is the second arrow, the hurt you add by replaying the injury and demanding an explanation that is not coming. The first arrow was theirs. The second is rumination, and that one is yours to put down, usually by giving your attention somewhere it is actually returned.",
        link: "/blog/the-two-arrows/",
      },
    ],
  },
  {
    id: "sleep-and-daily-reserves",
    category: "Sleep, energy, and your daily reserves",
    items: [
      {
        q: "How much does sleep really affect my temper?",
        a: "More than most people expect. Sleep deprivation research finds heightened emotional reactivity and weaker top-down control, which is a precise way of saying that tired brains feel provocations more strongly and restrain themselves less. It is one of the few levers that changes your whole day at once. If you can only fix one thing this week, fix your sleep.",
        link: "/blog/protect-your-sleep/",
      },
      {
        q: "Why am I so irritable when I am hungry?",
        a: "Hunger and fatigue lower the threshold at which anything registers as a provocation. The blunt version, sometimes taught as hungry, angry, lonely, tired, holds up as practical advice even though the old glucose explanation for self-control is contested. Treat irritability as data about your body before you treat it as information about the person in front of you. Eat first, decide after.",
        link: "/blog/you-cannot-pour-from-an-empty-cup/",
      },
      {
        q: "Does exercise actually help with anger?",
        a: "Regular aerobic activity helps; hitting something does not. Exercise reliably improves mood and lowers baseline stress, which raises the threshold at which things get to you. Aggressive release, the pillow punching and the rage room, follows the catharsis idea that research has repeatedly failed to support, and tends to leave people more aroused rather than less. Go for the walk instead.",
        link: "/blog/move-your-body/",
      },
      {
        q: "Why do I feel calmer after a walk outside?",
        a: "Because walking works on the body and the attention at the same time. Movement helps arousal come down, and time in green or open space is associated with attention restoration, which loosens the narrow focus that rumination depends on. The change of scene also breaks the loop physically. That is why a short walk often does more than another hour of thinking about it.",
        link: "/blog/walk-it-off/",
      },
      {
        q: "Does alcohol make me more reactive?",
        a: "Yes, and the mechanism is narrowing rather than loosening. Alcohol myopia is the finding that drinking shrinks attention to whatever is most immediate, so the provocation in front of you gets full weight and the consequences get almost none. That is why arguments after drinks escalate so fast. If a conversation matters, have it sober.",
      },
      {
        q: "Can caffeine make me more irritable?",
        a: "It can, because caffeine raises physiological arousal. A faster heart and a jumpier system feel very similar to being on edge, and people often misattribute that state to whatever is happening around them rather than to the cup. Notice whether your worst moments cluster after a heavy morning. Cutting back is not a personality change, but it lowers the floor you are reacting from.",
      },
      {
        q: "Why can I hold it together all day and lose it in the evening?",
        a: "Because regulating yourself all day has a cost, and by evening the demands meet a thinner reserve. The tidy laboratory story about a depleting willpower tank has had trouble replicating, so hold the explanation loosely, but the pattern is real enough to plan around. Put the difficult conversation earlier in the day. Give the evening fewer decisions and more recovery.",
      },
    ],
  },
  {
    id: "online-outrage-and-your-phone",
    category: "Online outrage and your phone",
    items: [
      {
        q: "Why are people so much harsher online than in person?",
        a: "Because the brakes are missing. The online disinhibition effect describes how anonymity, distance, and the absence of a face make people say things they never would in a room, since none of the usual feedback arrives to stop them. Expect it rather than take it personally. Most of what stings online would not have been said to you standing there.",
      },
      {
        q: "Why does outrage spread so fast online?",
        a: "Because moral and emotional language travels further than calm language. Posts that express indignation get shared more, and platforms reward what gets engagement, so the angriest framing of any story is the one you are most likely to see. Your feed is therefore a poor sample of reality. Assuming the world is as furious as your timeline is a mistake worth catching.",
        link: "/blog/the-algorithm-wants-a-reaction/",
      },
      {
        q: "Should I post something when I am angry about it?",
        a: "Wait until you are cool, then decide. The hot-cold empathy gap describes how poorly the aroused version of you predicts what the calm version will want, and posting is public and permanent in a way that a private message is not. Write it in a note instead. If it still matters tomorrow, you can post it then, better.",
        link: "/blog/the-comment-you-dont-post/",
      },
      {
        q: "Why do I feel worse after checking my phone first thing?",
        a: "Because you hand your attention to alarm before you have any footing. Attention shapes mood, and what you look at first tends to set the frame the rest of the morning gets read through. Give yourself a stretch of the morning that belongs to you. Even a short delay before the first scroll changes how the day starts.",
        link: "/blog/the-morning-sets-the-tone/",
      },
      {
        q: "How do I handle a nasty comment about me online?",
        a: "Do not answer it hot, and consider not answering it at all. Negativity bias means one hostile line will outweigh a page of kind ones in your memory, so the first task is to stop rereading it. A public reply usually feeds the exchange rather than ends it. If it is genuinely abusive, report or block, and give the rest nothing.",
      },
      {
        q: "Why do I keep checking for a reply after I send something risky?",
        a: "Because uncertainty is uncomfortable and checking briefly relieves it. Unpredictable rewards are the most compelling kind, which is why an inbox that might contain the answer pulls harder than one that certainly does not. The relief is short and the checking trains itself. Put the phone in another room and give yourself a set time to look.",
        link: "/blog/put-the-phone-down/",
      },
    ],
  },
  {
    id: "repairing-things-afterwards",
    category: "Repairing things afterwards",
    items: [
      {
        q: "How do I apologize for my part when I do not think I was entirely wrong?",
        a: "Apologize for what is clearly yours and leave the rest alone. Research on effective apology points to acknowledging the impact and taking responsibility for your own behavior, which you can do without conceding the whole argument. I raised my voice and that was not fair is complete on its own. The question of who was right can wait, and often stops mattering.",
        link: "/blog/own-it-plainly/",
      },
      {
        q: "Should I explain why I reacted the way I did?",
        a: "Explain later, if at all, and never in the same breath as the apology. The word but undoes what came before it, so a reason offered too early reads as a defense and asks the other person to manage your feelings while theirs are still raw. Own the effect first. If the context genuinely matters, raise it in a calmer conversation.",
      },
      {
        q: "What do I do if the other person is not ready to talk yet?",
        a: "Give them the recovery time and say something short in the meantime. Physiological arousal takes a while to come down, and pushing for resolution while someone is still flooded usually restarts the argument. Send a brief, unconditional line: I am sorry, and I am here when you want to talk. Then leave it alone, and do not use the wait to build a case.",
      },
      {
        q: "Why do I feel so much shame after losing my temper?",
        a: "Because you have moved from judging the act to judging yourself. Researchers separate guilt, which is about what you did and points toward repair, from shame, which is about what you are and mostly makes people hide. Shame feels more serious but does less work. Bring it back to the specific behavior, fix that, and let the verdict on your character go.",
        link: "/blog/the-shame-spiral-is-a-reaction-too/",
      },
      {
        q: "How do I keep one blow-up from damaging trust for months?",
        a: "Repair quickly and specifically. Because negative events weigh more heavily than positive ones, a single bad moment can outrank a long stretch of good ones unless something closes it. A short, honest repair soon after is what closes it. Do not wait for the right words. The speed and the plainness matter more than the wording.",
        link: "/blog/repair-fast-repair-small/",
      },
    ],
  },
  {
    id: "practices-with-evidence",
    category: "Practices with evidence behind them",
    items: [
      {
        q: "What is the difference between reframing something and pretending I am fine?",
        a: "Reframing changes how you see the event; pretending changes only what shows on your face. In emotion research these are cognitive reappraisal and expressive suppression, and they behave very differently: reappraisal tends to lower the feeling itself, while suppression leaves the arousal running and adds the effort of hiding it. Change the meaning if you can. Do not settle for hiding.",
      },
      {
        q: "Does naming what I feel actually help?",
        a: "Yes, and it is one of the cheapest tools available. Affect labeling is the finding that putting a feeling into words tends to reduce its intensity, which is where the phrase name it to tame it comes from. Be specific rather than general. I am embarrassed and a little frightened does more work than I am fine or I am furious.",
        link: "/blog/name-the-trigger-to-tame-it/",
      },
      {
        q: "How do I get better at telling my feelings apart?",
        a: "Practice putting finer words on them. Emotional granularity is the research term for how precisely a person distinguishes their emotional states, and people who do it well tend to regulate themselves better, because a precise name suggests a precise response. Try naming what you feel twice a day, in more than one word. Frustrated and tired points somewhere different from angry.",
      },
      {
        q: "Do if-then plans really work for staying calm?",
        a: "They work better than good intentions. An implementation intention is a plan in the form if this situation happens, then I will do that, and research finds this shape helps people follow through where a general resolution does not, because the cue does the remembering for you. Write two or three for the situations you already know. Then rehearse them while you are calm.",
        link: "/blog/the-if-then-plan/",
      },
      {
        q: "How should I talk to myself in a hot moment?",
        a: "Address yourself by name or as you, not as I. Self-distancing research finds that this small shift in language helps people think more clearly under stress and cool down faster, because it puts a little space between you and the feeling. Say it silently: you are angry, and you do not have to answer yet. It sounds odd and it works.",
      },
      {
        q: "Why do I promise myself I will stay calm and then not?",
        a: "Because the calm version of you cannot imagine the hot one. The hot-cold empathy gap describes exactly this: when you are settled, you underestimate how strongly a future state will drive your behavior, so the promise is made by someone who will not be there. Do not rely on willpower in the moment. Rely on rules and gaps you set up beforehand.",
        link: "/blog/personal-rules-for-a-peaceful-life/",
      },
      {
        q: "Does meditation actually make you less reactive?",
        a: "It helps, though not in the way people expect. Mindfulness practice trains you to notice what is happening a moment earlier, and that earlier noticing is what gives you room to choose. It does not remove the feeling or make provocations pleasant. Short and regular beats long and occasional, and the benefit shows up in ordinary moments rather than on the cushion.",
      },
      {
        q: "Can I practice staying calm before I actually need it?",
        a: "Yes, and that is the most reliable way to get better at it. Stress inoculation is the idea of rehearsing your response under mild, manageable pressure so the real event is familiar rather than novel. Use small annoyances as the training ground: the slow queue, the delayed train, the mildly irritating message. What you practice on those is what shows up in the big ones.",
      },
      {
        q: "Does being gentle with myself just make me soft?",
        a: "The research points the other way. Self-compassion is associated with more responsibility taking, more persistence after failure, and less avoidance, because you do not have to defend against your own verdict before you can look at what happened. Harsh self-criticism mostly adds a second problem. Be kind and exacting at once, the way a good coach is.",
        link: "/blog/repair-with-yourself/",
      },
      {
        q: "Do triggers ever lose their power?",
        a: "They can, and the process has a name. Habituation and extinction describe what happens when a cue stops being followed by the old outcome: repeated exposure without the usual reaction gradually weakens the link. Practically, that means every time you meet a trigger and do not fire, you are teaching it something. The tenth time is quieter than the first.",
        link: "/blog/defuse-it-in-advance/",
      },
      {
        q: "Why does what I pay attention to change how I feel?",
        a: "Because attention decides what your mood is built from. Research on attentional bias finds that people prone to anxiety and low mood look harder and longer at threatening or negative material, which then supplies the evidence for the feeling. It is a loop, and it can be interrupted. Choosing where to put your attention is not denial. It is deciding what you feed.",
        link: "/blog/fewer-inputs-more-peace/",
      },
    ],
  },
  {
    id: "about-the-book",
    category: "About the book",
    items: [
      {
        q: "What is Nothing Gets to You about?",
        a: "It is about the space between what happens and how you respond, the small pause where you get to choose instead of react. Drawing on ordinary moments at work and at home, it looks at why we react, what reacting quietly costs us, and how to build the steadiness to respond instead. The aim is not to feel less, but to be moved less.",
        link: "/book/",
        linkText: "About the book",
      },
      {
        q: "Who is this book for?",
        a: "For the quietly worn out, the people who are mostly fine and mostly tired, frayed by a hundred small reactions a day. The cold email, the argument replayed at night, the scroll that left you tense. If that is you, it was written for you.",
        link: "/blog/a-book-for-the-quietly-worn-out/",
      },
      {
        q: "Is Nothing Gets to You available on Kindle?",
        a: "Yes. It is available on Kindle now, and you can find it on Amazon. A paperback edition is on the way.",
        link: "/book/",
        linkText: "About the book",
      },
      {
        q: "Is there a paperback edition?",
        a: "A paperback is on the way. Until it is live, the Kindle edition is available on Amazon, and this site will link to the paperback as soon as it is out.",
        link: "/book/",
        linkText: "About the book",
      },
      {
        q: "Who wrote Nothing Gets to You?",
        a: "Gaurav Srivastava. He writes because the process helps him understand what he is learning; this book began with a few traits in his own character that had quietly begun to cost him.",
        link: "/author/",
        linkText: "About the author",
      },
      {
        q: "Does the book include exercises or a toolkit?",
        a: "Yes. Alongside the ideas, it ends with a small Toolkit of simple practices you can reach for in a hot moment: a single breath, one line to carry, the hour rule, a nightly two minutes, and an if-then plan. They are meant for the flooded moments, when you need something simple to grab.",
        link: "/blog/the-toolkit-at-a-glance/",
      },
      {
        q: "Is this a religious or spiritual book?",
        a: "No. It is practical and secular, one person's plain thinking about a very ordinary problem. It draws quietly on perennial wisdom where useful, but it names no schools of thought and asks you to believe nothing.",
      },
      {
        q: "How is this different from other books about staying calm?",
        a: "It goes deep on one thing rather than surveying many: the everyday skill of not being run by your reactions, in the small moments where it actually happens. It does not promise a life with no provocations. It offers a life where the thing lands and you already know how to let it pass.",
        link: "/book/",
        linkText: "About the book",
      },
      {
        q: "Where can I read more?",
        a: "The blog has a short, standalone piece drawn from the book, with a new reflection featured every week. Each one takes a single idea and puts it to work in an ordinary moment.",
        link: "/blog/",
        linkText: "Read the blog",
      },
    ],
  },
];

module.exports = { groups, all: groups.reduce((acc, g) => acc.concat(g.items), []) };
