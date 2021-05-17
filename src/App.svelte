<script>
  import VowelChart from "./VowelChart.svelte";
  import { getRandomVowelAndPerson } from "./randomVowel";
  import { playVowel } from "./vowelUtils";

  let practiced = 0;
  let wrongCount = 0;
  let lastAnsStatus = "none";
  let showHint = false;

  let vowelAndPerson = getRandomVowelAndPerson();

  function nextVowel() {
    showHint = false;
    vowelAndPerson = getRandomVowelAndPerson();
    const { vowel, person } = vowelAndPerson;
    return playVowel(vowel, person);
  }

  function toggleShowHint() {
    showHint = !showHint;
  }

  async function handleVowelSelect(e) {
    const selectedIPA = e.target.getAttribute("data-ipa");
    const { vowel, person } = vowelAndPerson;
    if (selectedIPA === vowel) {
      lastAnsStatus = "correct";
      practiced += 1;
      await playVowel(selectedIPA, person);
      await playVowel(vowel, person);
      lastAnsStatus = "none";
      await nextVowel();
    } else {
      wrongCount += 1;
      lastAnsStatus = "wrong";
      console.log(vowel);
      await playVowel(selectedIPA, person);
      await playVowel(vowel, person);
      lastAnsStatus = "none";
    }
  }
</script>

<main class={lastAnsStatus}>
  <VowelChart {handleVowelSelect} />
</main>

<div class="float-left">
  <p>Type: Vowel</p>
  <p>Practiced: {practiced}</p>
  <p>Wrong: {wrongCount}</p>
</div>

<div class="float-right">
  <p><input type="button" class="round-button" value="ℹ" /></p>
  <p>
    <input
      type="button"
      class="round-button"
      value="❔"
      on:click={toggleShowHint}
    />
  </p>
  {#if showHint}
    <p>{vowelAndPerson.vowel}</p>
  {/if}
</div>

<style>
  main {
    text-align: center;
  }

  main.correct {
    background-color: rgba(0, 255, 0, 0.2);
    border-top: 2px solid rgba(0, 255, 0, 0.5);
    border-bottom: 2px solid rgba(0, 255, 0, 0.5);
  }

  main.wrong {
    background-color: rgba(255, 0, 0, 0.2);
    border-top: 2px solid rgba(255, 0, 0, 0.5);
    border-bottom: 2px solid rgba(255, 0, 0, 0.5);
  }
</style>
