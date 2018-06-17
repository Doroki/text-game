const GameGrow = {
	lvl: 1,
	statsGrow: 1 * 10,

	updateStats(lvl) {
		this.lvl = lvl;
		this.statsGrow = lvl * 10;
	}
}


export default GameGrow;