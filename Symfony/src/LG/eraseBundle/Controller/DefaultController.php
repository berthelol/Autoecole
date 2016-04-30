<?php

namespace LG\eraseBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('LGeraseBundle:Default:index.html.twig');
    }
}
