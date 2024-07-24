class GameDadu {
  constructor(sumPlayer, sumDadu) {
    this.sumDadu = sumDadu;
    this.players = Array.from({ length: sumPlayer }, () => ({
      points: 0,
      dadu: this.acakDadu(sumDadu),
    }));
  }

  acakDadu(num) {
    return Array(num)
      .fill(0)
      .map(() => Math.floor(Math.random() * 6) + 1);
  }

  rulesDadu() {
    for (let i = 0; i < this.players.length; i++) {
      const player = this.players[i];
      const newDadu = [];
      for (let j = 0; j < player.dadu.length; j++) {
        const acakDadu = player.dadu[j];

        if (acakDadu === 6) {
          player.points += 1;
        } else if (acakDadu == 1) {
            console.log(newDadu, "newDadu")
          console.log(i + 1, this.players.length);
          if (i + 1 < this.players.length) {
            this.players[i + 1].dadu.push(1);
          } else {
            this.players.filter((p) => p.dadu.length > 0)[0].dadu.push(1);
            console.log("success")
          }
          
        } else {
          newDadu.push(acakDadu);
        }
      }
      player.dadu = newDadu; // update the player's dice array
    }
  }

  StartGame() {
    let round = 1;
    while (this.players.filter((player) => player.dadu.length > 0).length > 1) {
      console.log("============================");
      console.log(`Round ${round}`);
      console.log("============================");

      // Re-roll the dice for each player at the start of each round
      this.players.forEach((player, index) => {
        if (player.dadu.length > 0) {
          player.dadu = this.acakDadu(player.dadu.length);
        }
        console.log(`Pemain #${index + 1} (${player.points}):`, player.dadu);
      });

      this.rulesDadu();

      console.log("Setelah evaluasi:");
      this.players.forEach((player, index) => {
        console.log(`Pemain #${index + 1} (${player.points}):`, player.dadu);
      });

      round++;
    }
    this.printWinner();
  }

  getWinner() {
    let winner = this.players[0];
    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].points > winner.points) {
        winner = this.players[i];
      }
    }
    return `Winner is player ${this.players.indexOf(winner) + 1} with ${
      winner.points
    } points`;
  }

  printWinner() {
    console.log(this.getWinner());
  }
}

const newGame = new GameDadu(3, 3);
newGame.StartGame();
newGame.printWinner();
