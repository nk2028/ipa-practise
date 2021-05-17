<script>
  import VowelChart from "./VowelChart.svelte";
  import { getRandomVowelAndPerson } from "./randomVowel";
  import { playVowel } from "./vowelUtils";

  let practiced = 0;
  let wrongCount = 0;
  let lastAnsStatus = null;

  let vowelAndPerson = getRandomVowelAndPerson();

  function nextVowel() {
    vowelAndPerson = getRandomVowelAndPerson();
    const { vowel, person } = vowelAndPerson;
    return playVowel(vowel, person);
  }

  async function handleVowelSelect(e) {
    const selectedIPA = e.target.getAttribute("data-ipa");
    const { vowel, person } = vowelAndPerson;
    if (selectedIPA === vowel) {
      lastAnsStatus = "correct";
      practiced += 1;
      await playVowel(selectedIPA, person);
      await playVowel(vowel, person);
      lastAnsStatus = null;
      await nextVowel();
    } else {
      wrongCount += 1;
      lastAnsStatus = "wrong";
      console.log(vowel);
      await playVowel(selectedIPA, person);
      await playVowel(vowel, person);
      lastAnsStatus = null;
    }
  }
</script>

<main class={lastAnsStatus}>
  <h1>IPA Online Practice System</h1>
  <VowelChart {handleVowelSelect} />
</main>

<div class="float-left">
  <p>Type: Vowel</p>
  <p>Practiced: {practiced}</p>
  <p>Wrong: {wrongCount}</p>
</div>

<div class="float-right">
  <p><input type="button" class="round-button" value="ℹ" /></p>
  <p><input type="button" class="round-button" value="❔" /></p>
</div>

<style>
  main {
    text-align: center;
  }
  main.correct {
    outline: 1px solid green;
  }
  main.wrong {
    outline: 1px solid red;
  }
</style>
