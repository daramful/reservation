using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860
namespace api.Controllers
{
    public partial class BaseController : ControllerBase
    {
        public static IConfiguration _config { get; private set; }  
        public BaseController(IConfiguration config)
        {
            _config = config;
        }
    }
}
