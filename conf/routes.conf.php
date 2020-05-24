<?php

$Router
->AddRoute('{@}//index',           'Routes\\Home::Index')
->AddRoute('{@}//about',           'Routes\\Home::About')
->AddRoute('{@}//login',           'Routes\\Login::Index')
->AddRoute('{@}//logout',          'Routes\\Login::Destroy')
->AddRoute('{@}//join',            'Routes\\Join::Index')
->AddRoute('{@}//dashboard',       'Routes\\Dashboard\\Home::Index')
->AddRoute('{@}//api/v1/test/($)', 'Routes\\Api\\V1\\Test::Index')
->AddRoute('{@}//\x2b($)/($)',     'Routes\\Blog\\Post::Index')
->AddRoute('{@}//\x2b($)',         'Routes\\Blog\\Index::Index')
->AddRoute('{@}//\x7e($)',         'Routes\\User\\Index::Index')
->AddRoute('{@}//{@}',             'Routes\\Home::NotFound');
