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
        Schema::create('sites', function (Blueprint $table) {

            $table->id();

            $table->string('name');

            $table->longText('html')->nullable();

            $table->longText('css')->nullable();

            $table->longText('components')->nullable();

            $table->longText('styles')->nullable();

            $table->string('status')->default('Unpublished');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sites');
    }
};