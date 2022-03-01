<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function getProducts($request){
        $q=!empty(request('query')) ? request('query') : "";
        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        return Product::latest()->where('name','LIKE','%'.$q.'%')->with('category:id,name')->paginate((int)$per_page);;
    }
}
