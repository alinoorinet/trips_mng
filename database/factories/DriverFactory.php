<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Driver>
 */
class DriverFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'license_number' => fake()->unique()->randomNumber(5),
            'is_on_mission' => fake()->numberBetween(0, 1),
            'last_mission_at' => now(),
            'user_id' => User::factory(),
        ];
    }
}
