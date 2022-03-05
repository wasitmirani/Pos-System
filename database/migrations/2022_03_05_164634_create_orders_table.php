<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->foreignId('table_id')->nullable()->constrained('tables');
            $table->string('order_no');
            $table->string('order_type');
            $table->foreignId('order_status_id')->nullable()->constrained('order_statuses');
            $table->foreignId('payment_status_id')->default(1)->constrained('payment_statuses');
            $table->double('total', 15, 2)->nullable()->default(0.00);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
