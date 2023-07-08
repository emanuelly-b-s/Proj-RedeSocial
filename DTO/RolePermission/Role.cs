using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DTO;

public class RoleDTO
{
   public int Id { get; set; }
   public string RoleName { get; set; }
   public int Forum { get; set; }
   public List<int> Permissions { get; set; }

}