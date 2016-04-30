<?php

// src/loic/PlatformBundle/Controller/AdvertController.php

namespace loic\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AdvertController extends Controller
{

    public function indexAction()
    {

        $content = $this->get('templating')->render('loicPlatformBundle:Advert:index.html.twig', array(
        'nom' => 'loic'));        
    return new Response($content);
    }
}
