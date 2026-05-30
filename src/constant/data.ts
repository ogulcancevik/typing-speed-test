export interface TypePassage {
	id: string;
	text: string;
}

export interface TypingData {
	easy: TypePassage[];
	medium: TypePassage[];
	hard: TypePassage[];
}

export const DATA: TypingData = {
	easy: [
		{
			id: "easy-1",
			text: "the sun rose over the quiet town birds sang in the trees as people woke up and started their day it was going to be a warm and sunny morning",
		},
		{
			id: "easy-2",
			text: "she walked to the store to buy some bread and milk the shop was busy but she found what she needed quickly on her way home she saw a friend and waved",
		},
		{
			id: "easy-3",
			text: "the dog ran across the park chasing a ball he was fast and loved to play after a while he got tired and lay down in the cool shade of a big oak tree",
		},
		{
			id: "easy-4",
			text: "i like to read books before i go to sleep it helps me relax after a long day my favorite stories are about adventure and travel to far away places",
		},
		{
			id: "easy-5",
			text: "the kitchen smelled of fresh coffee and toast mom was making breakfast while dad read the news it was a normal morning in their small but cozy home",
		},
		{
			id: "easy-6",
			text: "we went to the beach last summer the water was blue and the sand was warm we built a big sand castle and looked for shells along the shore",
		},
		{
			id: "easy-7",
			text: "the cat sat on the window sill watching the rain drops fell down the glass one by one she seemed happy to be inside where it was dry and warm",
		},
		{
			id: "easy-8",
			text: "my best friend lives next door to me we play games together after school sometimes we ride our bikes around the block or sit and talk for hours",
		},
		{
			id: "easy-9",
			text: "spring is my favorite time of year flowers start to bloom and the days get longer i love to see the trees turn green again after the cold winter months",
		},
		{
			id: "easy-10",
			text: "the music played softly in the room she closed her eyes and let the sounds wash over her it was a simple song but it made her feel at peace",
		},
	],
	medium: [
		{
			id: "medium-1",
			text: "learning a new skill takes patience and consistent practice whether youre studying a language picking up an instrument or mastering a sport the key is to show up every day small improvements compound over time and before you know it youll have made remarkable progress",
		},
		{
			id: "medium-2",
			text: "the old lighthouse had stood on the cliff for over a century guiding sailors safely through treacherous waters its beam cut through the fog each night a reassuring presence for those navigating the rocky coastline many storms had tested its structure but it remained steadfast",
		},
		{
			id: "medium-3",
			text: "coffee culture has evolved dramatically in recent decades what was once a simple morning ritual has become an art form with baristas crafting intricate latte designs and roasters sourcing beans from remote mountain villages the humble cup of coffee now tells a global story",
		},
		{
			id: "medium-4",
			text: "urban gardens are transforming city landscapes around the world residents are converting rooftops balconies and abandoned lots into thriving green spaces these initiatives not only provide fresh produce but also create communities reduce stress and help combat the urban heat island effect",
		},
		{
			id: "medium-5",
			text: "the documentary explored how technology shapes our daily habits from the moment we wake to an alarm on our phones to the podcasts we fall asleep to digital tools have woven themselves into the fabric of modern life the question is are we in control",
		},
		{
			id: "medium-6",
			text: "traveling by train offers a unique perspective on the countryside unlike flying which reduces landscapes to abstract patterns rail journeys let you witness the gradual transitions between regions you see farms give way to forests and small towns emerge from rolling hills",
		},
		{
			id: "medium-7",
			text: "the chef believed that great cooking starts with quality ingredients she visited local farmers each week selecting vegetables at their peak ripeness her menu changed with the seasons reflecting what the land offered diners appreciated the freshness they could taste in every bite",
		},
		{
			id: "medium-8",
			text: "libraries have reinvented themselves for the digital age beyond lending books they now offer coworking spaces 3d printers recording studios and coding workshops these community hubs have become places where people of all ages come to learn create and connect with others",
		},
		{
			id: "medium-9",
			text: "the architect designed buildings that worked with nature rather than against it large windows captured natural light reducing the need for electricity green roofs absorbed rainwater and provided insulation her philosophy was simple sustainable design should be beautiful functional and accessible to everyone",
		},
		{
			id: "medium-10",
			text: "night markets come alive after sunset in cities across asia vendors set up stalls selling everything from grilled skewers to handmade crafts the air fills with enticing aromas and the buzz of conversation locals and tourists alike wander through sampling street food and hunting for bargains",
		},
	],
	hard: [
		{
			id: "hard-1",
			text: "the philosophers argument hinged on a seemingly paradoxical assertion that absolute freedom pursued without constraint inevitably undermines itself consider she wrote how the libertarian ideal when taken to its logical extreme produces conditions in which the powerful dominate the weak thereby eliminating freedom for the majority her critics dismissed this as sophistry her supporters hailed it as profound",
		},
		{
			id: "hard-2",
			text: "quantum entanglement einsteins spooky action at a distance continues to perplex physicists and philosophers alike when two particles become entangled measuring one instantaneously affects the other regardless of the distance separating them this phenomenon doesnt violate relativity no information travels faster than light yet it challenges our intuitions about locality causality and the nature of reality itself",
		},
		{
			id: "hard-3",
			text: "the renaissance polymaths correspondence reveals a mind of extraordinary breadth in a single weeks letters he discussed astronomical observations critiqued a colleagues architectural drawings proposed improvements to the citys sewage system and composed a sonnet for a patrons daughter specialization he remarked wryly is for insects his contemporaries found him exhausting posterity finds him inspirational",
		},
		{
			id: "hard-4",
			text: "algorithmic trading has fundamentally restructured financial markets high-frequency systems execute thousands of transactions per second exploiting minute price discrepancies across exchanges critics argue this creates systemic fragility the 2010 flash crash saw the dow jones plummet 1000 points in minutes before recovering proponents counter that algorithms provide liquidity and reduce spreads ultimately benefiting retail investors",
		},
		{
			id: "hard-5",
			text: "the biographer faced an ethical dilemma her subjects private journals recently discovered in an attic contained revelations that would overturn his carefully cultivated public image should she publish them biography she mused exists in tension between truth-telling and respect for the dead after months of deliberation she chose disclosure reasoning that sanitized history serves no one",
		},
		{
			id: "hard-6",
			text: "microplastics have infiltrated virtually every ecosystem on earth from the mariana trench to arctic ice cores these polymer fragments smaller than 5mm in diameter originate from degrading consumer products synthetic textiles and industrial processes researchers have detected them in human blood placental tissue and breast milk their long-term health implications remain disturbingly unclear the ubiquity of plastic pollution represents an unprecedented experiment on planetary biology",
		},
		{
			id: "hard-7",
			text: "the conductors interpretation of mahlers ninth symphony emphasized its prophetic qualities the premonition of catastrophe the aching nostalgia for a world about to vanish mahler composed this knowing he was dying she explained in the program notes but he also intuited somehow that european civilization itself stood at the precipice the orchestras performance hushed trembling transcendent left the audience in stunned silence",
		},
		{
			id: "hard-8",
			text: "constitutional scholars continue debating the counter-majoritarian difficulty how can judicial review whereby unelected judges overturn legislation passed by democratic representatives be reconciled with popular sovereignty some argue courts protect minority rights against tyrannical majorities others contend this reasoning masks ideological preferences in neutral-sounding jurisprudence the tension perhaps is irresolvable democratic systems must balance competing values rather than optimize for any single principle",
		},
		{
			id: "hard-9",
			text: "the novelists prose style elliptical fragmented punctuated by abrupt temporal shifts reflected her thematic preoccupations memorys unreliability identitys fluidity the impossibility of objective narration every story she declared in an interview is simultaneously true and false it reveals by concealing illuminates by casting shadows critics accused her of obscurantism she responded that clarity itself can be a form of deception",
		},
		{
			id: "hard-10",
			text: "the archaeological expedition unearthed artifacts that complicated prevailing theories about bronze age trade networks obsidian from anatolia lapis lazuli from afghanistan and amber from the baltic all discovered in a single mycenaean tomb suggested commercial connections far more extensive than previously hypothesized weve underestimated ancient peoples navigational capabilities and their appetite for luxury goods the lead researcher observed globalization isnt as modern as we assume",
		},
	],
};

export default DATA;
