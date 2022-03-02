<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function getAllTables($request){

        $q=!empty(request('query')) ? request('query') : "";

        $per_page=!empty($request->per_page) ?  $request->per_page  : env('PER_PAGE');
        $tables=Table::latest()
                    ->where('name','LIKE','%'.$q.'%');
       if(!isset($request->paginate))
    //    if(!$request->paginate==false)
          $tables=$tables->paginate((int)$per_page);
       else
            $tables=$tables->get();

       return $tables;
    }
}
