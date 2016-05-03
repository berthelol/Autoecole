<?php

// src/OC/PlatformBundle/Controller/AdvertController.php

namespace Loic\FirstBundle\Controller;

// N'oubliez pas ce use :
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AdvertController extends Controller
{
  public function indexAction()
  {
    $content = $this->get('templating')->render('LoicFirstBundle:Advert:view.html.twig');
    return new Response($content);
  }
  public function viewAction($id, Request $request)
  {
    if(empty($id))
    {
      $id=100;
    }
    $tag = $request->query->get('tag');
  	$content = $this->get('templating')->render('LoicFirstBundle:Advert:index.html.twig', array(
        'nom' => 'view','id'=>$id,'tag'=>$tag));
    return new Response($content);
	
  }
  public function errorAction()
  {
    return $this->render(
      'LoicFirstBundle:Advert:view.html.twig');
  }
  public function redirectAction()
  {
    return $this->redirectToRoute('loic_first_error');
  }

  }
