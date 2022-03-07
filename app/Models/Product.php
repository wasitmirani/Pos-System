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
    public function getThumbnailAttribute($value)
    {
        if(!empty($value))
        return asset('/uploads/products/'.$value);
        else
        return null;
    }
    public function setCurrencyAttribute($value)
    {
        $this->attributes['currency']= "Rs.".$value;
    }
    public function getProducts($request){
        $q=!empty(request('query')) ? request('query') : "";
        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        return Product::latest()->where('name','LIKE','%'.$q.'%')->with('category:id,name')->paginate((int)$per_page);
    }
}
