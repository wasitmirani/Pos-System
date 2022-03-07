<?php

namespace App\Http\Controllers\backend\api\category;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $category;
    public function __construct()
    {
        $this->category=new Category();
    }

    public function index(Request $request)
    {
        $latest_categories=$this->category->latest()->take(3)->get();
        $categories=$this->category->getAllCategories($request);
        return response()->json(['categories'=> $categories,'latest_categories'=>$latest_categories]);
    }




    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:categories|max:255',
        ]);
        return $this->category->create([
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
            'name' => 'required|unique:categories,name,'.$id,
        ]);
        return $this->category->where('id',$id)->update([
            'name'=>$request->name,
            'slug'=>Str::snake($request->name, '-'),
            'description'=>!empty($request->description) ?  $request->description : 'N/A',
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
        return  $this->category->destroy($id);
    }
}
