<?php

$Router
->AddRoute('{@}//index',           'Routes\\Home::Index')
->AddRoute('{@}//about',           'Routes\\Home::About')
->AddRoute('{@}//login',           'Routes\\Login::Index')
->AddRoute('{@}//logout',          'Routes\\Login::Destroy')
->AddRoute('{@}//join',            'Routes\\Join::Index')
->AddRoute('{@}//theme-test/($)',  'Routes\\ThemeTest::Index')
->AddRoute('{@}//dashboard',       'Routes\\Dashboard\\Home::Index')
->AddRoute('{@}//($)/($)',         'Routes\\BlogPost::Index')
->AddRoute('{@}//($)',             'Routes\\Blog::Index')
->AddRoute('{@}//api/v1/test/($)', 'Routes\\Api\\V1\\Test::Index')
->AddRoute('{@}//{@}',             'Routes\\Home::NotFound');
