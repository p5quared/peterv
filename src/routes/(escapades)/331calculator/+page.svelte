<script>
// Project
let CP = 0;
let RP = 0;
let p = 1;

$: S = Math.min(p*(.04*CP + .01*RP), 6);

let hw_scores = Array(5).fill().map(() => Array(9).fill(0));
let hw_total = 0
function getHW() {
	let total = 0;
	for (let i = 0; i < 5; i++) {
		hw_scores[i].sort();
		total += hw_scores[i].slice(2).reduce((a, b) => a + b, 0);
	}
	hw_total = total;
	return total
}


let Q = 0;

let TF = 0;

$: QTF = 3 * Math.max(Q/20, TF/40);

let M = 0;
let F = 0;

$: E = (35/100)*F + (25/100)*Math.max(M, F);

$: rawdog = (4/100)*CP + (1/100)*RP + S + (27/600)*hw_total + QTF + E
</script>

<h1 class="h2">Calculating your grade feels tedious</h1>
<p class="p mb-6">Thank God for computers, I suppose...</p>


<div class="m-4 p-8 bg-tertiary-50 outline">
	<h2 class="h3">Project</h2>
		<label for="CP" class="p-2">Project Coding Total (CP)
			<input class="border" type="number" bind:value={CP} min="0" max="100" step="1" />
		</label>
		<label for="RP" class="p-2">Project Reflection Total (RP)
			<input class="border" type="number" bind:value={RP} min="0" max="100" step="1" />
		</label>
	<h2 class="h3 my-4">Homework Grades (Types are: 1a, 1b, 2a, 2b, 3)</h2>
	{#each hw_scores as hw, idx }
		<label for="hw_scores" class="p-2">Homework Question Type {idx + 1}
			<input class="border" type="number" bind:value={hw_scores[idx][0]} min="0" max="100" step="1" />
			<input class="border" type="number" bind:value={hw_scores[idx][1]} min="0" max="100" step="1" />
			<input class="border" type="number" bind:value={hw_scores[idx][2]} min="0" max="100" step="1" />
			<input class="border" type="number" bind:value={hw_scores[idx][3]} min="0" max="100" step="1" />
			<input class="border" type="number" bind:value={hw_scores[idx][5]} min="0" max="100" step="1" />
			<input class="border" type="number" bind:value={hw_scores[idx][6]} min="0" max="100" step="1" />
			<input class="border" type="number" bind:value={hw_scores[idx][7]} min="0" max="100" step="1" />
			<input class="border" type="number" bind:value={hw_scores[idx][8]} min="0" max="100" step="1" />
		</label>
	{/each}

	<label for="q1" class="p-2">Quiz Sum (Q)
		<input class="border" type="number" bind:value={Q} min="0" max="100" step="1" />
	</label>

	<label for="tf" class="p-2">Exam True/False Sum (TF)
		<input class="border" type="number" bind:value={TF} min="0" max="100" step="1" />
	</label>

	<label for="m" class="p-2">Midterm (M)
		<input class="border" type="number" bind:value={M} min="0" max="100" step="1" />
	</label>

	<label for="f" class="p-2">Final (F)
		<input class="border" type="number" bind:value={F} min="0" max="100" step="1" />
	</label>

	<button class="btn btn-secondary hover:text-primary-400" on:click={getHW}>&lt Click to Calculate Homework Total &gt </button>
	<h2 class="h3">Your estimated grade is: {rawdog.toFixed(2)}%</h2>
</div>
<p class="prose">Disclaimer: I whipped this up in like 20 minutes and only ran
	this once with my numbers and it matched
the score I calculated with a 'real' calculator so I called it a day. (I am not 
considering your survey score for instance). Feel free to email me if there
is something glaringly wrong or you have a question.</p>

