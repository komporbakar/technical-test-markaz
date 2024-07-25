
// Init Class
class GameDadu {

  // Init variable yang digunakan
  constructor(sumPlayer, sumDadu) {
    this.sumDadu = sumDadu;
    this.players = Array.from({ length: sumPlayer }, () => ({
      points: 0,
      dadu: this.acakDadu(sumDadu),
    }));
  }

  // function acak Dadu
  acakDadu(num) {
    return Array(num)
      .fill(0)
      .map(() => Math.floor(Math.random() * 6) + 1);
  }

  //rules dadu
  rulesDadu() {
    // Loop Player yang masih punya dadu atau semua pemain saat awal permainan
    for (let i = 0; i < this.players.length; i++) {
      // buat variable player baru untuk memanggil suatu player
      const player = this.players[i];
      // buat variable untuk menyimpan dadu yang baru diacak
      const newDadu = [];
      // loop Jumlah dadu yang diinput atau dadu yang dimiliki player lain
      for (let j = 0; j < player.dadu.length; j++) {
        // buat variable acakDadu untuk memanggil dadu acak
        const acakDadu = player.dadu[j];

        // Jika dadu 6, tambah 1 poin dan tidak di push ke newDadu
        if (acakDadu === 6) {
          player.points += 1;
          // Jika dadu 1, push 1 ke  dadu berikutnya
        } else if (acakDadu == 1) {
            console.log(newDadu, "newDadu")
          console.log(i + 1, this.players.length);
          //Jika i + 1 kurang dari panjang player, push 1 ke dadu berikutnya
          if (i + 1 < this.players.length) {
            this.players[i + 1].dadu.push(1);
            // Jika tidak maka push dadu ke pemain awal 
          } else {
            this.players.filter((p) => p.dadu.length > 0)[0].dadu.push(1);
            console.log("success")
          }
          
        } else {
          // Jika nilai dadu bukan 1,6 melainkan 2,3,4,5, push ke newDadu
          newDadu.push(acakDadu);
        }
      }

      // update dadu player
      player.dadu = newDadu; // update the player's dice array
    }
  }

  // Mulai Game
  StartGame() {
    // init round
    let round = 1;
    //loop player hingga hanya 1 pemain yang memili dadu
    while (this.players.filter((player) => player.dadu.length > 0).length > 1) {
      // Tampilan round keberapa
      console.log("============================");
      console.log(`Round ${round}`);
      console.log("============================");

      //mapping player dan hasil dadu yang diacak
      this.players.forEach((player, index) => {
        if (player.dadu.length > 0) {
          player.dadu = this.acakDadu(player.dadu.length);
        }
        console.log(`Pemain #${index + 1} (${player.points}):`, player.dadu);
      });

      // pannggil function rules dadu
      this.rulesDadu();

      // Tampilan setelah evaluasi
      console.log("Setelah evaluasi:");
      this.players.forEach((player, index) => {
        console.log(`Pemain #${index + 1} (${player.points}):`, player.dadu);
      });
      // akan melanjutkan permainan hingga hanya 1 pemain yang memili dadu
      round++;
    }
  
    //memanggil function printWinner untuk menampilkan wpemain yang juara
    this.printWinner();
  }

  // buat function getWinner untuk mengetahui pemain yang juara
  getWinner() {
    // init variable pemain yang juara
    let winner = this.players[0];
    // looping semua player untuk menentukan pemain yang juara
    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].points > winner.points) {
        winner = this.players[i];
      }
    }

    // return pemain yang juara
    return `Winner is player ${this.players.indexOf(winner) + 1} with ${
      winner.points
    } points`;
  }

  // buat function printWinner
  printWinner() {
    console.log(this.getWinner());
  }
}

// buat variable newGame untuk memanggil class GameDadu
const newGame = new GameDadu(3, 3);
// jalankan function StartGame
newGame.StartGame();
