<?php

namespace App\Http\Controllers\backend\api\table;

use App\Models\Table;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TableController extends Controller
{
    private $table;
    public function __construct()
    {
        $this->table=new Table();
    }

    public function index(Request $request)
    {
        $latest_tables=$this->table->latest()->take(3)->get();
        $tables=$this->table->getAllTables($request);
        return response()->json(['tables'=> $tables,'latest_tables'=>$latest_tables]);
    }




    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:tables|max:255',
        ]);
        return $this->table->create([
            'name'=>$request->name,
            'slug'=>Str::snake($request->name, '-'),
            'description'=>$request->description,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|unique:tables,name,'.$id,
        ]);
        return $this->table->where('id',$id)->update([
            'name'=>$request->name,
            'slug'=>Str::snake($request->name, '-'),
            'description'=>$request->description,
        ]);
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return  $this->table->destroy($id);
    }
}
