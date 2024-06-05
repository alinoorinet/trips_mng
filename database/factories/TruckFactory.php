<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Truck>
 */
class TruckFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => fake()->randomElement(['Trailer', 'Tank']),
            'is_on_mission' => fake()->numberBetween(0, 1),
            'need_repair' => 0,
            'last_mission_at' => now(),
            'max_loading_weight' => fake()->randomElement([20000, 25000]),
        ];
    }
}
