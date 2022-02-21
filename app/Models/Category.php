<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function getAllCategories($request){
        $q=$request->query;
        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $categories=Category::latest()
                    ->where('name','LIKE','%'.$q.'%');
       if(!$request->paginate==false)
          $categories=$categories->paginate((int)$per_page);
       else
            $categories=$categories->get();
            
        $categories;
    }
}
