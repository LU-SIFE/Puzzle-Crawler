function room_logic() {
	
	generate_player();
	generate_door();
	generate_enemy(1);
	current_floor ++;
	if (current_floor >= 4) {
		generate_enemy(2);
	}
	if (current_floor >= 5) {
		generate_enemy(3);
	}
	if (current_floor >= 6) {
			generate_potion(2);
	}
	if (current_floor >= 8) {
		generate_enemy(4);
	}
	if (current_floor >= 11) {
		generate_enemy(5);
		generate_potion(3);
	}
	
	if (current_floor >= 14) {
		generate_enemy(6);
	}
	
	
	generate_potion(1);
	generate_cash();
}