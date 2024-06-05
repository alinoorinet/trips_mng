<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trip', function (Blueprint $table) {
            $table->id();
            $table->text('customer_name');
            $table->timestamp('begin_at')->nullable();
            $table->timestamp('end_at')->nullable();
            $table->string('load_content', 64);
            $table->integer('load_weight'); // in Kg
            $table->integer('load_id')->unique();
            $table->text('destination_addr');

            $table->unsignedBigInteger('task_id')->nullable();
            $table->unsignedBigInteger('driver_id')->nullable();
            $table->unsignedBigInteger('truck_id')->nullable();
            $table->foreign('task_id')->references('id')->on('task');
            $table->foreign('driver_id')->references('id')->on('driver');
            $table->foreign('truck_id')->references('id')->on('truck');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trip');
    }
};
