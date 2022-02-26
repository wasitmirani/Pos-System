<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
   protected $guarded = [];
    public function getAllCategories($request){

        $q=!empty(request('query')) ? request('query') : "";

        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $categories=Category::latest()
                    ->where('name','LIKE','%'.$q.'%');
       if(empty($request->paginate))
    //    if(!$request->paginate==false)
          $categories=$categories->paginate((int)$per_page);
       else
            $categories=$categories->get();

       return $categories;
    }
}
